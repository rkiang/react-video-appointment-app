const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "video_appointment"
})

module.exports = db;