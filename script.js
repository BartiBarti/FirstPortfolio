var weekdaySpan = document.getElementById("weekday");
var dateSpan = document.getElementById("date");

var currentWeekDay = "";

function getCurrentWeekDay() { 
    var result;
    var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    result = daysArray[currentDay];
    return result;
}
currentWeekDay = getCurrentWeekDay();
weekdaySpan.innerText = currentWeekDay;

var optionsForDate = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
var dateToShow = new Date().toLocaleDateString('PL', optionsForDate);
dateSpan.innerText = dateToShow;