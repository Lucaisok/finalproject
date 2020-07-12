const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/collect"
);

module.exports.registration = (first, last, email, location, password) => {
    return db.query(
        `
    INSERT INTO users (first, last, email, location, password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, first, last, email, location, password`,
        [first, last, email, location, password]
    );
};

module.exports.getHashed = (email) => {
    return db.query(
        `
    SELECT password from users WHERE email = $1`,
        [email]
    );
};

module.exports.getId = (email) => {
    return db.query(
        `
    SELECT id FROM users WHERE email = $1`,
        [email]
    );
};

module.exports.getUserById = (id) => {
    return db.query(
        `
    SELECT id, first, last, email, location
    FROM users
    WHERE id = $1`,
        [id]
    );
};

module.exports.collect = (
    first,
    last,
    email,
    tel,
    location,
    tavolo,
    guests,
    giorno,
    mese,
    anno,
    ora
) => {
    return db.query(
        `
    INSERT INTO customers (first, last, email, tel, location, tavolo, guests, giorno, mese, anno, ora)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
            first,
            last,
            email,
            tel,
            location,
            tavolo,
            guests,
            giorno,
            mese,
            anno,
            ora,
        ]
    );
};
