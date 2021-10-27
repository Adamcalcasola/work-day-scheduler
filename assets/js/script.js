//var timeRowEl = document.createElement
var container = document.querySelector(".container");
// container.appendChild(divEl);
console.log(container);
var hour = 9;
var timeVar = moment().hour();
for (i = 0; i < 9; i++) {
    var outerDiv = document.createElement("div");
    var hourEl = document.createElement("div");
    var textAreaEl = document.createElement("textarea");
    var buttonEl = document.createElement("button");
    
    outerDiv.className = "row time-block";
    //textAreaEl.className = "col-sm-10 description";
    buttonEl.className = "col-sm-1 saveBtn btn";
    hourEl.className = "col-sm-1 hour";
    hourEl.textContent = hour + " AM ";
    if (hour == 12) {
        hourEl.textContent = hour + " PM";
    }
    if (hour > 12) {
        hourEl.textContent = hour-12 + " PM";
    }
    if (hour < timeVar) {
        textAreaEl.className = "col-sm-10 description past";
    } else if (hour === timeVar) {
        textAreaEl.className = "col-sm-10 description present";
    } else {
        textAreaEl.className = "col-sm-10 description future";
    }
    buttonEl.innerHTML = "<i class='fas fa-save'></i>"
    outerDiv.appendChild(hourEl);
    outerDiv.appendChild(textAreaEl);
    outerDiv.appendChild(buttonEl);
    //console.log(outerDiv);
    container.appendChild(outerDiv);
    hour++;
    }



console.log(moment().hour());