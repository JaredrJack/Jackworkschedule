// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Display today's day and date
// show today's date
var today = dayjs().format("dddd,MMMM Y,YYYY");

console.log(today);
var todayElement = document.getElementById('currentDay');
todayElement.textContent = today;

// enter and save text in timeblock
var events = [];

var loadEvents = function () {
    var savedEvents = localStorage.getItem("events");
    if (!savedEvents) {
        return false;
    }
    savedEvents = JSON.parse(savedEvents);
    console.log(savedEvents)
    for (var i = 0; i < savedEvents.length; i++) {
        var eventTime = savedEvents[i].time;
        var eventText = savedEvents[i].text;
        console.log(eventTime);
        console.log(eventText);
        var eventBlock = document.getElementById(eventTime);
        if (eventBlock) {
            eventBlock.innerHTML = eventText;
        } else {
            console.log("Could not find element with ID " + eventTime);
        }

    }
}

$(".time-block").on("click", "button", function () {
    var currentText = $(this).siblings("textarea").val().trim();
    console.log(currentText);
    var timeBlock = $(this).parent().attr("id");
    console.log(timeBlock);
 localStorage.setItem(timeBlock,currentText);
});

$("#9-hour .description").val(localStorage.getItem("9-hour"))
$("#10-hour .description").val(localStorage.getItem("10-hour"))
$("#11-hour .description").val(localStorage.getItem("11-hour"))
$("#12-hour .description").val(localStorage.getItem("12-hour"))
$("#1-hour .description").val(localStorage.getItem("1-hour"))
$("#2-hour .description").val(localStorage.getItem("2-hour"))
$("#3-hour .description").val(localStorage.getItem("3-hour"))
$("#4-hour .description").val(localStorage.getItem("4-hour"))
$("#5-hour .description").val(localStorage.getItem("5-hour"))


// set timeblock color
var currentHour = dayjs().format("H")
console.log(currentHour);

if (currentHour >= 10) {
    $(".9am").addClass("past");
} else if (currentHour < 9) {
    $(".9am").addClass("future");
} else {
    $(".9am").addClass("present");
}

if (currentHour >= 11) {
    $(".10am").addClass("past");
} else if (currentHour < 10) {
    $(".10am").addClass("future");
} else {
    $(".10am").addClass("present");
}

if (currentHour >= 12) {
    $(".11am").addClass("past");
} else if (currentHour < 11) {
    $(".11am").addClass("future");
} else {
    $(".11am").addClass("present");
}

if (currentHour >= 13) {
    $(".12pm").addClass("past");
} else if (currentHour < 12) {
    $(".12pm").addClass("future");
} else {
    $(".12pm").addClass("present");
}

if (currentHour >= 14) {
    $(".1pm").addClass("past");
} else if (currentHour < 13) {
    $(".1pm").addClass("future");
} else {
    $(".1pm").addClass("present");
}

if (currentHour >= 15) {
    $(".2pm").addClass("past");
} else if (currentHour < 14) {
    $(".2pm").addClass("future");
} else {
    $(".2pm").addClass("present");
}

if (currentHour >= 16) {
    $(".3pm").addClass("past");
} else if (currentHour < 15) {
    $(".3pm").addClass("future");
} else {
    $(".3pm").addClass("present");
}

if (currentHour >= 17) {
    $(".4pm").addClass("past");
} else if (currentHour < 16) {
    $(".4pm").addClass("future");
} else {
    $(".4pm").addClass("present");
}

if (currentHour >= 18) {
    $(".5pm").addClass("past");
} else if (currentHour < 17) {
    $(".5pm").addClass("future");
} else {
    $(".5pm").addClass("present");
}

loadEvents();
 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // TODO: Add code to display the current date in the header of the page.

