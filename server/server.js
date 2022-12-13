const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/database");

app.use(express.json());
app.use(cors());

app.get("/user", (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
})