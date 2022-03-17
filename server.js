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

app.post('/add', jsonParser, function(req, res){
    let course = req.body;
    console.log(course);

    const query = "INSERT INTO course(q_id, course_id, question, q_type, info) VALUES($1, $2, $3, $4, $5) RETURNING *";
    let values = [course.q_id, course.course_id, course.question, course.q_type , course.info];

    pool.query(query, values)
    .then(function (response) {
        console.log(response.rows);
        return res.send();
    })
    .catch(function (error) {
        return res.sendStatus(500);
    });
});


app.get("/search", function (req, res) {
    let { course_id } = req.query;

    if(course_id.length === 0){
        pool.query("SELECT * FROM course")
        .then(function (response) {
            if(response.rows.length === 0){
                return res.sendStatus(404);
            }
            return res.json({ rows: response.rows });
        })
        .catch(function (error) {
            return res.sendStatus(500);
        });
    }else {
        pool.query("SELECT * FROM course WHERE course_id = $1", [course_id])
            .then(function (response) {
                if(response.rows.length === 0){
                    return res.sendStatus(404);
                }
                return res.json({ rows: response.rows });
            })
            .catch(function (error) {
                return res.sendStatus(500);
            });
        }
});

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});