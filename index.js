const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const secret = require("./secrets.json");
const csurf = require("csurf");
const { hash, compare } = require("./bc");
const db = require("./db");
//const { isUndefined } = require("util");

app.use(
    cookieSession({
        secret: secret.secret,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("public"));

app.post("/register", (req, res) => {
    console.log(req.body);
    if (
        req.body.first != "" &&
        req.body.last != "" &&
        req.body.location != "" &&
        req.body.email != "" &&
        req.body.password != ""
    ) {
        hash(req.body.password)
            .then((hashedPassword) => {
                console.log("hashed", hashedPassword);
                // let hashedPassword = hashedPassword;
                db.registration(
                    req.body.first,
                    req.body.last,
                    req.body.email,
                    req.body.location,
                    hashedPassword
                )
                    .then((result) => {
                        console.log(result);
                        req.session.userId = result.rows[0].id; //here we set userId
                        req.session.location = result.rows[0].location; // here we set the location value we´ll use later for retrieve info about customers.
                        res.json({ success: true });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    } else {
        res.json({ success: false });
    }
});

app.post("/login", (req, res) => {
    console.log(req.body);
    if (req.body.email != "" && req.body.password != "") {
        db.getHashed(req.body.email)
            .then((hashedPassObj) => {
                console.log("hashedPassObj", hashedPassObj);
                let hashedPassword = hashedPassObj.rows[0].password;
                compare(req.body.password, hashedPassword)
                    .then((match) => {
                        console.log("password is correct? ", match);
                        if (match) {
                            db.getId(req.body.email)
                                .then((result) => {
                                    console.log("result: ", result);
                                    req.session.userId = result.rows[0].id; //her we call back userId
                                    res.json({ success: true });
                                })
                                .catch((err) => console.log(err));
                        }
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    } else {
        res.json({ success: false });
    }
});

app.get("/user", async function (req, res) {
    try {
        const data = await db.getUserById(req.session.userId);
        console.log("usersData: ", data);
        res.json(data.rows[0]);
    } catch (err) {
        console.log(err);
    }
});

app.post("/userForm", async function (req, res) {
    console.log(req.body);
    try {
        const data = await db.collect(
            req.body.customerFirst,
            req.body.customerLast,
            req.body.customerEmail,
            req.body.telephone,
            req.body.tableNumber,
            req.body.location,
            req.body.guestsNumber,
            req.body.day,
            req.body.month,
            req.body.year,
            req.body.hour
        );
        console.log(data);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.get("/", (req, res) => {
    if (req.session.userId) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.redirect("welcome");
    }
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
