import React from "react";
import { useStatefulFields } from "./useStatefulFields";
import { useAuthSubmit } from "./useAuthSubmit";

export default function UserForm(props) {
    const [values, handleChange] = useStatefulFields();
    const [error, handleClick] = useAuthSubmit("/userForm", values); //to do server post route
    return (
        <div>
            {error && <p>Ops...something went wrong</p>}
            <input
                name="customerFirst"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                name="customerLast"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input
                name="customerEmail"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                name="telephone"
                placeholder="Tel Number"
                onChange={handleChange}
            />
            <input
                name="location"
                value={props.location}
                onChange={handleChange}
            />
            <input
                name="tableNumber"
                placeholder="Table"
                onChange={handleChange}
            />
            <input
                name="guestsNumber"
                placeholder="Number of Guests"
                onChange={handleChange}
            />
            <select name="day" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select name="month" onChange={handleChange}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <input name="year" placeholder="Year" onChange={handleChange} />
            <select name="hour" onChange={handleChange}>
                <option value="00-02">00-02</option>
                <option value="02-04">02-04</option>
                <option value="04-06">04-06</option>
                <option value="06-08">06-08</option>
                <option value="08-10">08-10</option>
                <option value="10-12">10-12</option>
                <option value="12-14">12-14</option>
                <option value="14-16">14-16</option>
                <option value="16-18">16-18</option>
                <option value="18-20">18-20</option>
                <option value="20-22">20-22</option>
                <option value="22-24">22-24</option>
            </select>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}
