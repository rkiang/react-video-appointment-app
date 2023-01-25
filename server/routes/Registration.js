const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const mysql = require("mysql");
const db = require("../config/database");

router.post("/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Using Bcrypt for password input to hash to db query
    const encryptedPW = await bcrypt.hash(password, saltRounds);

    const email = req.body.email;
    const fName = req.body.fName;
    const lName = req.body.lName;
    db.query("INSERT INTO user (username, email, fName, lName, password) VALUES (?, ?, ?, ?, ?)",
        [username, email, fName, lName, encryptedPW],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result) {
                    res.send(result);
                }
            }
        }
    );
});

module.exports = router;