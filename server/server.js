var pg = require("pg");
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.static("public"));
var port = 3000;
var hostname = "localhost";
// const env = require("../env.json")
// const Pool = pg.Pool;
// const pool = new Pool(env);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, hostname, function () {
    return console.log("Listening at: http://" + hostname + ":" + port);
});
