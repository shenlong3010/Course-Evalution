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
            div1.setAttribute('class', 'form');
            const div2 = document.createElement('div');

            // <label for="question">Short Answer Question 1:</label>          
            const label = document.createElement('label');
            label.setAttribute('for', 'question');
            const id = i.toString();
            label.textContent = "Short Answer Question " + id + ": ";


            // <input id="sa1" type="text" name="sa1">
            const input = document.createElement('input');
            const qid = "sa" + id;
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
        for (let i = 0; i < int_mcq_num; i++) {

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
            const div1 = document.createElement('div');
            div1.setAttribute('class', 'form');
            const div2 = document.createElement('div');

            const label = document.createElement('label');
            label.setAttribute('for', 'question');
            const id = i.toString();
            label.textContent = "Multiple Choice Question " + id + ": ";

            const input = document.createElement('input');
            const qid = "mcq" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);

            div2.append(label);
            div2.append(input);

            const div3 = document.createElement('div');

            const labela = document.createElement('label');
            labela.textContent = "Option A: ";

            const inputa = document.createElement('input');
            const qida = qid + "a";
            inputa.setAttribute('id', qida);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qida);

            div3.append(labela);
            div3.append(inputa);

            const labelb = document.createElement('label');
            labelb.textContent = "Option B: ";

            const inputb = document.createElement('input');
            const qidb = qid + "b";
            inputb.setAttribute('id', qidb);
            inputb.setAttribute('type', 'text');
            inputb.setAttribute('name', qidb);

            div3.append(labelb);
            div3.append(inputb);

            const labelc = document.createElement('label');
            labelc.textContent = "Option C: ";

            const inputc = document.createElement('input');
            const qidc = qid + "c";
            inputa.setAttribute('id', qidc);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qidc);

            div3.append(labelc);
            div3.append(inputc);

            const labeld = document.createElement('label');
            labeld.textContent = "Option D: ";

            const inputd = document.createElement('input');
            const qidd = qid + "d";
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
        for (let i = 0; i < int_cb_num; i++) {
            const div1 = document.createElement('div');
            div1.setAttribute('class', 'form');
            const div2 = document.createElement('div');

            const label = document.createElement('label');
            label.setAttribute('for', 'question');
            const id = i.toString();
            label.textContent = "Check Box Question " + id + ": ";

            const input = document.createElement('input');
            const qid = "cbq" + id;
            input.setAttribute('id', qid);
            input.setAttribute('type', 'text');
            input.setAttribute('name', qid);

            div2.append(label);
            div2.append(input);

            const div3 = document.createElement('div');

            const labela = document.createElement('label');
            labela.textContent = "Option A: ";

            const inputa = document.createElement('input');
            const qida = qid + "a";
            inputa.setAttribute('id', qida);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qida);

            div3.append(labela);
            div3.append(inputa);

            const labelb = document.createElement('label');
            labelb.textContent = "Option B: ";

            const inputb = document.createElement('input');
            const qidb = qid + "b";
            inputb.setAttribute('id', qidb);
            inputb.setAttribute('type', 'text');
            inputb.setAttribute('name', qidb);

            div3.append(labelb);
            div3.append(inputb);

            const labelc = document.createElement('label');
            labelc.textContent = "Option C: ";

            const inputc = document.createElement('input');
            const qidc = qid + "c";
            inputa.setAttribute('id', qidc);
            inputa.setAttribute('type', 'text');
            inputa.setAttribute('name', qidc);

            div3.append(labelc);
            div3.append(inputc);

            const labeld = document.createElement('label');
            labeld.textContent = "Option D: ";

            const inputd = document.createElement('input');
            const qidd = qid + "d";
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