// Global Variables
var list = ["", "", "", "", "", "", "", "", ""];
var time = moment().hour();
var hour = 9;
var currentDay = document.querySelector("#currentDay");
var container = document.querySelector(".container");
var outerDiv = document.createElement("div");
var hourEl = document.createElement("div");
var textAreaEl = document.createElement("textarea");
var buttonEl = document.createElement("button");

currentDay.textContent = moment().format('dddd, MMMM Do');

// refreshes page every hour
function refresh() {
    if (time == hour) {
        location.reload();
    }
}

var interval = setInterval(refresh, 60000);

// function to change color of events as time passes
function hourPast() {
    if (hour < time) {
        textAreaEl.className = "col-sm-10 description past";
    } else if (hour === time) {
        textAreaEl.className = "col-sm-10 description present";
    } else {
        textAreaEl.className = "col-sm-10 description future";
    }     
}

// function to display correct meridiem for time slot
function meridiem() {
    hourEl.textContent = hour + " AM ";
    if (hour == 12) {
        hourEl.textContent = hour + " PM";
    }
    if (hour > 12) {
        hourEl.textContent = hour-12 + " PM";
    }
}

// loads saved list of tasks from local storage
function loadSaved() {
    var load = localStorage.getItem("saved");
    if (!load) {
        return false;
    } 
    load = JSON.parse(load);
    list = load;
}

loadSaved();

// saves list item to local storage
var saveContent = function(event) {
    var saveButton = event.path[1].id || event.target.id;
    var saveText = document.getElementById("content" + saveButton).value;
    list[saveButton] = saveText;
    var saved = list;
    localStorage.setItem("saved", JSON.stringify(saved));
}

// displays page content
function display() {
    for (i = 0; i < 9; i++) {
        
        outerDiv = document.createElement("div");
        hourEl = document.createElement("div");
        textAreaEl = document.createElement("textarea");
        buttonEl = document.createElement("button");

        textAreaEl.setAttribute("Id", "content" + i);
        buttonEl.setAttribute("Id", i);
        
        outerDiv.className = "row time-block";
        textAreaEl.className = "col-sm-10 description";
        buttonEl.className = "col-sm-1 saveBtn btn";
        hourEl.className = "col-sm-1 hour";
        
        textAreaEl.value = list[i];
        buttonEl.innerHTML = "<i class='fas fa-save'></i>"
        
        hourPast();
        
        meridiem();
        
        outerDiv.appendChild(hourEl);
        outerDiv.appendChild(textAreaEl);
        outerDiv.appendChild(buttonEl);
        container.appendChild(outerDiv);
        
        hour++;
    }
}

display();

// event listeners for save buttons
document.getElementById("0").addEventListener("click", saveContent);
document.getElementById("1").addEventListener("click", saveContent);
document.getElementById("2").addEventListener("click", saveContent);
document.getElementById("3").addEventListener("click", saveContent);
document.getElementById("4").addEventListener("click", saveContent);
document.getElementById("5").addEventListener("click", saveContent);
document.getElementById("6").addEventListener("click", saveContent);
document.getElementById("7").addEventListener("click", saveContent);
document.getElementById("8").addEventListener("click", saveContent);