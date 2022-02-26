const pg = require("pg");
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

const env = require("../env.json")
const Pool = pg.Pool;
const pool = new Pool(env);

pool.connect().then(() => {
	console.log(`Connected to database ${env.database}`);
});

app.use(express.json())
app.use(express.static("public"))

app.post("/", (req, res) => {

});

app.get("/search", (req, res) => {

});

app.listen(port, hostname, () => {

});