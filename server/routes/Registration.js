const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mysql = require("mysql");

router.post("/", async (req, res) => {


    db.query("INSERT INTO user (username, email, fName, lName, password) VALUES (?, ?, ?, ?, ?",
        [username, email, fName, lName, password],
        (err, result) => {
            console.log(err);
        }
    );
});

module.exports = router;