const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const Course_id = document.getElementById("Course_id");
const ques_num = document.getElementById("question_number");
const table = document.getElementById("ques_list");

const button1 = document.getElementById("number");
const button2 = document.getElementById("submit");

button1.addEventListener("click", function () {
    var num = (<HTMLInputElement>document.getElementById("question_number")).value;
    var int_num: number = +num;

    for (let i = 0; i < 10; i++) {
        //var tableRow = document.createElement("tr");
        //tableRow.textContent = "A";
        //table.append(tableRow);
    }
});