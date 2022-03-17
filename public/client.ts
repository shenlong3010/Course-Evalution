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

button1.addEventListener("click", function () {
    const mcq_number = (<HTMLInputElement>document.getElementById("mcq_number")).value;
    const cb_number = (<HTMLInputElement>document.getElementById("cb_number")).value;
    const sa_number = (<HTMLInputElement>document.getElementById("sa_number")).value;

    var int_mcq_num: number = +mcq_number;
    var int_cb_num: number = +cb_number;
    var int_sa_num: number = +sa_number;

    mcq_list.textContent = "";
    cbq_list.textContent = "";
    saq_list.textContent = "";

    if (int_sa_num == 0) {
        saq_list.textContent = "";
    }
    else {
        for (let i = 0; i < int_sa_num; i++) {
            const div1 = document.createElement('div');
            div1.setAttribute('class','form');
            const div2 = document.createElement('div');
            
            // <label for="question">Short Answer Question 1:</label>          
           const label = document.createElement('label');
           label.setAttribute('for','question');
           const id = i.toString();
           label.textContent = "Short Answer Question " + id;
           

			// <input id="sa1" type="text" name="sa1">
            const input = document.createElement('input');
            const qid = "sa" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);
            
            div2.append(label);
            div2.append(input);
            div1.append(div2);
        }
    }

    if (int_mcq_num == 0) {
        mcq_list.textContent = "";
    }
    else {
        for (let i = 0; i < int_mcq_num; i++) {
            
        }
    }
    
    if (int_cb_num == 0) {
        cbq_list.textContent = "";
    }
    else {
        for (let i = 0; i < int_cb_num; i++) {
        
        }
    }

});