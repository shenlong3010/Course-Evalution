const pg = require("pg");
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

const env = require("../env.json")
const Pool = pg.Pool;
const pool = new Pool(env);

const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const Course_id = document.getElementById("Course_id");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, hostname, () => {
	return console.log(`Listening at: http://${hostname}:${port}`);
});