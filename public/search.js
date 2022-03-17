let button = document.getElementById("submit");
let message = document.getElementById("message");
let table = document.getElementById("survey");

function removeChildren(element) {
	while (element.hasChildNodes()) {
		element.lastChild.remove();
	}
}

// add Event Listener
button.addEventListener("click", function() {

    removeChildren(table);
    message.textContent="";
	fetch(`/search?course_id=${course_id}`).then(async function (response) {
		console.log(response);
		if (response.status === 200) {
			return await response.json();
		} else {
			throw Error(response.status);
		}
	}).then(function (response) { 
        for (let row of response.rows) {
            let tableRow = document.createElement("tr");
            for (let key of ["question", "options"]) {
                let cell = document.createElement("td");
                cell.textContent = row[key];
                tableRow.append(cell);
            }
            table.append(tableRow);
        }
	}).catch(function (error) {
        message.textContent="No course find";
		console.log(error);
	});

});
