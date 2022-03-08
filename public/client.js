var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var Course_id = document.getElementById("Course_id");
var ques_num = document.getElementById("question_number");
var table = document.getElementById("ques_list");
var button1 = document.getElementById("number");
var button2 = document.getElementById("submit");
button1.addEventListener("click", function () {
    //console.log("Testing");
    console.log(5);
    var num = document.getElementById("question_number").value;
    console.log("A" + num);
    var int_num = +num;
    console.log("B" + int_num);
    for (var i = 0; i < 10; i++) {
        //var tableRow = document.createElement("tr");
        console.log(i);
        //tableRow.textContent = "A";
        //table.append(tableRow);
    }
});
