var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var Course_id = document.getElementById("Course_id");
var table = document.getElementById("ques_list");
var button1 = document.getElementById("question_generate");
var button2 = document.getElementById("submit");
var message = document.getElementById("message");
button1.addEventListener("click", function () {
    var mcq_number = document.getElementById("mcq_number").value;
    var cb_number = document.getElementById("cb_number").value;
    var sa_number = document.getElementById("sa_number").value;
    var int_mcq_num = +mcq_number;
    var int_cb_num = +cb_number;
    var int_sa_num = +sa_number;
    console.log(int_mcq_num);
    console.log(int_cb_num);
    console.log(int_sa_num);
    message.textContent = "" + int_mcq_num + ", " + int_cb_num + ", " + int_sa_num;
    for (var i = 0; i < 10; i++) {
        //var tableRow = document.createElement("tr");
        //tableRow.textContent = "A";
        //table.append(tableRow);
    }
});
