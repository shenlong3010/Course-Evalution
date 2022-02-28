var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var Course_id = document.getElementById("Course_id");
var ques_num = document.getElementById("question_number");
var table = document.getElementById("ques_list");
var button = document.getElementById("submit");
button.addEventListener("click", function () {
    var num = document.getElementById("ques_num").value;
    var int_num = +num;
    for (var i = 0; i < int_num; i++) {
        var tableRow = document.createElement("tr");
        tableRow.textContent = "A" + i;
        table.append(tableRow);
    }
});
