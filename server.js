var pg = require("pg");
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.static("public"));
var port = 3000;
var hostname = "localhost";
var path = require('path');
// const env = require("../env.json")
// const Pool = pg.Pool;
// const pool = new Pool(env);
app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.sendFile(__dirname + "/" + "public");
    var body = req.body;
    console.log(body);
    // check property of the body
    var exist = false;
    // check table exist
    if (!exist) {
        var createTable = "CREATE TABLE evaluation_forms";
    }
    /* Table
     * Name:
     * Column:
     * Row:
     */
    var insertVal = "INSERT INTO ";
});
app.listen(port, hostname, function () {
    return console.log("Listening at: http://" + hostname + ":" + port);
});
