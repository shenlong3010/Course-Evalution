var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var Course_id = document.getElementById("Course_id");
var ques_num = document.getElementById("question_number");
var table = document.getElementById("ques_list");
var button1 = document.getElementById("number");
var button2 = document.getElementById("submit");
button1.addEventListener("click", function () {
    var num = document.getElementById("ques_num").value;
    var int_num = +num;
    for (var i = 0; i < 10; i++) {
        //var tableRow = document.createElement("tr");
        console.log(i);
        //tableRow.textContent = "A";
        //table.append(tableRow);
    }
});
