const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mysql = require("mysql");

router.post("/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const fName = req.body.fName;
    const lName = req.body.lName;

    db.query("INSERT INTO user (username, email, fName, lName, password) VALUES (?, ?, ?, ?, ?",
        [username, email, fName, lName, password],
        (err, result) => {
            console.log(err);
        }
    );
});

module.exports = router;