const express = require('express')
const app = express();
const port = 3000;
const mysql = require('mysql');
const session = require('express-session');
const sequelize = require('./model/sequelize').sequelize
const auth = require('./routes/auth')
const user = require('./routes/user')
const rental = require('./routes/rentals')
const country = require('./routes/country')


const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Password123$",
    port: 3306
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret: "12AB34",
    resave: false,
    saveUninitialized: false,
}))


app.use('',auth);
app.use('',user);
app.use('',country);
app.use('',rental);

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});

