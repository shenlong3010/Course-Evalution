
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const Course_id = document.getElementById("Course_id");
const ques_num = document.getElementById("question_number");
const table = document.getElementById("ques_list");

const button = document.getElementById("submit");

button.addEventListener("click", function () {
    var num = (<HTMLInputElement>document.getElementById("ques_num")).value;
    var int_num: number = +num;

    for (let i = 0; i < int_num; i++) {
        var tableRow = document.createElement("tr");
        tableRow.textContent = "A" + i;
        table.append(tableRow);
    }
}
);