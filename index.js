// Author: Dr. P. Rambabu
// npm install express
var express = require('express');
var app = express();

// set port, listen for requests
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//http://localhost:8080
app.get('/', function (req, res) {
       res.send('<h1>Hello World</h1>');
})
    
// Connect MySQL Database
// npm install mysql - MySQL Database client for nodes
var mysql = require('mysql');

// Create Connection to MySQL
var connection = mysql.createConnection({
  host:'demo-156.cc1ekf609fyd.us-east-1.rds.amazonaws.com',
  user:'root',
  password:'mysql123',
  database:'mru'
});

//GET Method - Student Data: http://localhost:8080/GetStudents
app.get("/GetStudents", function(req , res){

  connection.query("SELECT * FROM mru.student", function (err, data) {
      res.send(data);
  });

});
