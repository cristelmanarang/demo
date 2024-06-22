function DBConnect()
{
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
}

function AlertText()
{
alert("test js called");
}
function InsertDB(FirstName, LastName)
{
alert("test js called");
}