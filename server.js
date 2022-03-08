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
    res.sendFile(__dirname + "/" + "public");
});
app.listen(port, hostname, function () {
    return console.log("Listening at: http://" + hostname + ":" + port);
});
