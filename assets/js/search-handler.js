var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("search-history");
var display = document.querySelector(".main-container")



var getWeatherInfo = function (searchInput) {

    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&units=imperial&appid=f28282748979d8ef4250a43282c46535";

    fetch(weatherApi)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    $("#Main-container").removeClass("hide")
                    displayWeather(data)
                })
            }
        })
    }

// Search button function
var searchHandler = function (cityName) {
    cityName.preventDefault();
    var cityName = searchInput.value.trim();
    console.log(cityName);


    if (cityName) {
        getWeatherInfo(cityName);
        // getCovidInfo(cityName);
        cityHistory(cityName);
        searchInput.value = "";

    } else {
        swal("You entered an invalid city name!", "Please enter a valid one");
    }
};

var displayWeather = function (data, searchInput) {
    var currentTemp = data.main.temp;
    console.log(currentTemp)
    document.querySelector("#weather-data").innerHTML = currentTemp;
    var currentHumid = data.main.humidity;
    console.log(currentHumid)
    var currentWind = data.wind.speed;
    console.log(currentWind)
    
    var currentDate = moment().format("M/D/YYYY")
    console.log(currentDate)

         var iconDisplay = "<img src= 'http://openweathermap.org/img/wn/" + data.weather.icon + "@2x.png' />"

        var cityLocation = document.createElement("h2")
        cityLocation.innerHTML = searchInput + ": " + currentDate


}

// Adding city search to history 
var cityHistory = function (city) {
    var historyEl = document.createElement('option');
    historyEl.setAttribute("value", city);
    historyEl.setAttribute("id", city)
    historyEl.textContent = city;
    searchHistory.append(historyEl);

    historyEl.onclick = clickCity;
}

// function to call back clickable cities from the history
var clickCity = function () {
    var cityName = this.id;
    getWeatherInfo(cityName);
}


searchBtn.addEventListener("click", searchHandler);
searchInput.addEventListener("keyup", function (event) {
    if (event.key === 13) {
        searchHandler(cityName)
    }

});

