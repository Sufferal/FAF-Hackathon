const express = require('express')
const app = express();
const port = 5000;
const mysql = require('mysql')


var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Password123$",
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});


app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});

