const pg = require("pg");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const port = 3000;
const hostname = "localhost";
const path = require('path');

// const env = require("../env.json")
// const Pool = pg.Pool;
// const pool = new Pool(env);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));

});

app.listen(port, hostname, () => {
	return console.log(`Listening at: http://${hostname}:${port}`);
});