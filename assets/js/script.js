// // Initialize all input of type date
// var calendars = bulmaCalendar.attach('[type="date"]', options);

// // Loop on each calendar initialized
// for(var i = 0; i < calendars.length; i++) {
// 	// Add listener to date:selected event
// 	calendars[i].on('select', date => {
// 		console.log(date);
// 	});
// }

// // To access to bulmaCalendar instance of an element
// var element = document.querySelector('#fromDate');
// if (element) {
// 	// bulmaCalendar instance is available as element.bulmaCalendar
// 	element.bulmaCalendar.on('select', function(datepicker) {
// 		console.log(datepicker.data.value());
// 	});
// }


var findCity = document.querySelector("#search-btn")
var cityCard = document.querySelector("#city-container")
var saveCity = JSON.parse(localStorage.getItem(".list-group")) || [];
var infoEL = document.querySelector("#main-container")
var weatherEL = document.querySelector("#weather-block")
var searchInput = document.querySelector("#search-input")
var searchHistory = document.querySelector("#search-history")
var city = searchInput.value
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + "=imperial&appid=f28282748979d8ef4250a43282c46535";

var getWeatherInfo = function (city) {

	// format the github api url
	var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=f28282748979d8ef4250a43282c46535";

var searchHandler = function(event) {
	$("#main-container").removeClass("hide")
	var city = searchInput.value.trim();
	fetch(apiUrl)
    .then(response => {
        console.log(response)
    })

	console.log(city)
}

findCity.addEventListener("click", searchHandler);
    //Enter key while in search box will activate search
    searchInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            searchHandler(event)
        }

    });