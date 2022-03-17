var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var Course_id = document.getElementById("Course_id");
var table = document.getElementById("ques_list");
var button1 = document.getElementById("question_generate");
var button2 = document.getElementById("submit");
var mcq_list = document.getElementById("mcq_list");
var cbq_list = document.getElementById("cb_list");
var saq_list = document.getElementById("sa_list");
button1.addEventListener("click", function () {
    var mcq_number = document.getElementById("mcq_number").value;
    var cb_number = document.getElementById("cb_number").value;
    var sa_number = document.getElementById("sa_number").value;
    var int_mcq_num = +mcq_number;
    var int_cb_num = +cb_number;
    var int_sa_num = +sa_number;
    mcq_list.textContent = "";
    cbq_list.textContent = "";
    saq_list.textContent = "";
    if (int_sa_num == 0) {
        saq_list.textContent = "";
    }
    else {
        for (var i = 1; i <= int_sa_num; i++) {
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'form');
            var div2 = document.createElement('div');
            // <label for="question">Short Answer Question 1:</label>          
            var label = document.createElement('label');
            label.setAttribute('for', 'question');
            var id = i.toString();
            label.textContent = "Short Answer Question " + id + ": ";
            // <input id="sa1" type="text" name="sa1">
            var input = document.createElement('input');
            var qid = "sa" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);
            div2.append(label);
            div2.append(input);
            div1.append(div2);
            saq_list.append(div1);
        }
    }
    if (int_mcq_num == 0) {
        mcq_list.textContent = "";
    }
    else {
        for (var i = 1; i <= int_mcq_num; i++) {
            /*
            <div class="form">
                <div>
                    <label for="question">Multiple Choice Question 1:</label>
                    <input id="mcq1" type="text" name="mcq1">
                    <div>
                        <label>Option A:</label>
                        <input id="mcq1a" type="text" name="mcq1a">
                        <label>Option B:</label>
                        <input id="mcq1b" type="text" name="mcq1b">
                        <label>Option C:</label>
                        <input id="mcq1c" type="text" name="mcq1c">
                        <label>Option D:</label>
                        <input id="mcq1d" type="text" name="mcq1d">
                    </div>
                </div>
            </div>
            */
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'form');
            var div2 = document.createElement('div');
            var label = document.createElement('label');
            label.setAttribute('for', 'question');
            var id = i.toString();
            label.textContent = "Multiple Choice Question " + id + ": ";
            var input = document.createElement('input');
            var qid = "mcq" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);
            div2.append(label);
            div2.append(input);
            var div3 = document.createElement('div');
            var labela = document.createElement('label');
            labela.textContent = "Option A: ";
            var inputa = document.createElement('input');
            var qida = qid + "a";
            inputa.setAttribute('id', qida);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qida);
            div3.append(labela);
            div3.append(inputa);
            var labelb = document.createElement('label');
            labelb.textContent = "Option B: ";
            var inputb = document.createElement('input');
            var qidb = qid + "b";
            inputb.setAttribute('id', qidb);
            inputb.setAttribute('type', 'text');
            inputb.setAttribute('name', qidb);
            div3.append(labelb);
            div3.append(inputb);
            var labelc = document.createElement('label');
            labelc.textContent = "Option C: ";
            var inputc = document.createElement('input');
            var qidc = qid + "c";
            inputa.setAttribute('id', qidc);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qidc);
            div3.append(labelc);
            div3.append(inputc);
            var labeld = document.createElement('label');
            labeld.textContent = "Option D: ";
            var inputd = document.createElement('input');
            var qidd = qid + "d";
            inputd.setAttribute('id', qidd);
            inputd.setAttribute('type', 'text');
            inputd.setAttribute('name', qidd);
            div3.append(labeld);
            div3.append(inputd);
            div2.append(div3);
            div1.append(div2);
            mcq_list.append(div1);
        }
    }
    if (int_cb_num == 0) {
        cbq_list.textContent = "";
    }
    else {
        for (var i = 1; i <= int_cb_num; i++) {
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'form');
            var div2 = document.createElement('div');
            var label = document.createElement('label');
            label.setAttribute('for', 'question');
            var id = i.toString();
            label.textContent = "Check Box Question " + id + ": ";
            var input = document.createElement('input');
            var qid = "cbq" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);
            div2.append(label);
            div2.append(input);
            var div3 = document.createElement('div');
            var labela = document.createElement('label');
            labela.textContent = "Option A: ";
            var inputa = document.createElement('input');
            var qida = qid + "a";
            inputa.setAttribute('id', qida);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qida);
            div3.append(labela);
            div3.append(inputa);
            var labelb = document.createElement('label');
            labelb.textContent = "Option B: ";
            var inputb = document.createElement('input');
            var qidb = qid + "b";
            inputb.setAttribute('id', qidb);
            inputb.setAttribute('type', 'text');
            inputb.setAttribute('name', qidb);
            div3.append(labelb);
            div3.append(inputb);
            var labelc = document.createElement('label');
            labelc.textContent = "Option C: ";
            var inputc = document.createElement('input');
            var qidc = qid + "c";
            inputa.setAttribute('id', qidc);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qidc);
            div3.append(labelc);
            div3.append(inputc);
            var labeld = document.createElement('label');
            labeld.textContent = "Option D: ";
            var inputd = document.createElement('input');
            var qidd = qid + "d";
            inputd.setAttribute('id', qidd);
            inputd.setAttribute('type', 'text');
            inputd.setAttribute('name', qidd);
            div3.append(labeld);
            div3.append(inputd);
            div2.append(div3);
            div1.append(div2);
            cbq_list.append(div1);
        }
    }
});
