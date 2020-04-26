// Global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do"); 
var hourEl = $("#hour").data("time");
var saveButton = $(".saveBtn");
var timeNow = moment().format('HH');
var table = $("#table");

// Date on top of the page.
currentDay.innerHTML = todaysDate;
timePassing();

//changes row colors based on time 
function timePassing (){
        $(".row").each(function() {
        hourEl = parseInt($(this).attr("id"));
     
        if(hourEl < timeNow){
            $(this).addClass("past");
        } else if (hourEl == timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
     });
    };

    // save button listener.
$(".saveBtn").on("click", function(){
    
    var hourStore = parseInt($(this).parents("div").attr("id"));
    var descriptStore = $(this).siblings("textarea").val();

    save(hourStore, descriptStore);

// Save button to add data to local storage.
function save(hStore, dStore) {
    event.preventDefault();
    localStorage.setItem(hStore , dStore);

 };
});

// // Prints items saved in the local storage.
$(document).ready(function(){
    $(".hour").each(function() {
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#13 .description").val(localStorage.getItem("13"));
        $("#14 .description").val(localStorage.getItem("14"));
        $("#15 .description").val(localStorage.getItem("15"));
        $("#16 .description").val(localStorage.getItem("16"));
        $("#17 .description").val(localStorage.getItem("17"));
});
});