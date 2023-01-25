const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/database");

app.use(express.json());
app.use(cors());

//Routes
const registerationRouter = require("./routes/Registration");
app.use("/register", registerationRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001");
})