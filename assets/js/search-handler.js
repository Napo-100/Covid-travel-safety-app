var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("search-history");

// var options = {
//     startDate: "2020-09-19"
// }

// Initialize all input of type date
// var calendars = bulmaCalendar.attach('[type="date"]', options);

// // Loop on each calendar initialized
// for(var i = 0; i < calendars.length; i++) {
// 	// Add listener to date:selected event
// 	calendars[i].on('select', date => {
// 		console.log(date);
// 	});
// }

// // To access to bulmaCalendar instance of an element
// var element = document.querySelector('#my-element');
// if (element) {
// 	// bulmaCalendar instance is available as element.bulmaCalendar
// 	element.bulmaCalendar.on('select', function(datepicker) {
// 		console.log(datepicker.data.value());
// 	});
// }


// Search button function
var searchHandler = function (cityName) {
    cityName.preventDefault();
    var cityName = searchInput.value.trim();
    console.log(cityName);
    if (cityName) {
        // getWeatherInfo(cityName);
        // getCovidInfo(cityName);
        cityHistory(cityName);
        searchInput.value = "";
    } else {
        alert("Please enter a City Name!")
    }
};

// Adding city search to history 
var cityHistory = function (city) {
    var historyEl = document.createElement('option');
    historyEl.setAttribute("value", city);
    historyEl.setAttribute("id", city)
    historyEl.textContent = city;
    searchHistory.append(historyEl);

    // historyEl.onclick = clickCity;
}


searchBtn.addEventListener("click", searchHandler);