const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const Course_id = document.getElementById("Course_id");

const table = document.getElementById("ques_list");

const button1 = document.getElementById("question_generate");
const button2 = document.getElementById("submit");

const mcq_list = document.getElementById("mcq_list");
const cbq_list = document.getElementById("cb_list");
const saq_list = document.getElementById("sa_list");

//const message = document.getElementById("message");

button1.addEventListener("click", function () {
    const mcq_number = (<HTMLInputElement>document.getElementById("mcq_number")).value;
    const cb_number = (<HTMLInputElement>document.getElementById("cb_number")).value;
    const sa_number = (<HTMLInputElement>document.getElementById("sa_number")).value;

    var int_mcq_num: number = +mcq_number;
    var int_cb_num: number = +cb_number;
    var int_sa_num: number = +sa_number;

    //message.textContent = "" + int_mcq_num + ", " + int_cb_num + ", " + int_sa_num;

    for (let i = 0; i < 10; i++) {
        //var tableRow = document.createElement("tr");
        //tableRow.textContent = "A";
        //table.append(tableRow);
    }
});