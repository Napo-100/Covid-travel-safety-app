var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("search-history");
<<<<<<< HEAD


=======
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

>>>>>>> feature/weatherAPI
// Search button function
var searchHandler = function (cityName) {
    cityName.preventDefault();
    var cityName = searchInput.value.trim();
    console.log(cityName);
<<<<<<< HEAD
    if (cityName) {
        // getWeatherInfo(cityName);
        // getCovidInfo(cityName);
        cityHistory(cityName);
        searchInput.value = "";
=======


    if (cityName) {
        getWeatherInfo(cityName);
        // getCovidInfo(cityName);
        cityHistory(cityName);
        searchInput.value = "";

>>>>>>> feature/weatherAPI
    } else {
        swal("You entered an invalid city name!", "Please enter a valid one");
    }
};

<<<<<<< HEAD
=======
var displayWeather = function (data) {
    var currentTemp = data.main.temp;
    console.log(currentTemp)
    var currentHumid = data.main.humidity;
    console.log(currentHumid)
    var currentWind = data.wind.speed;
    console.log(currentWind)
    
    var currentDate = moment().format("M/D/YYYY")
    console.log(currentDate)

         var iconDisplay = "<img src= 'http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' />"
         console.log(iconDisplay)

        var weatherTitle = document.getElementById("weather-title")
        var tempToday = document.querySelector("#temp-today")
        var humidToday = document.querySelector("#humid-today")
        var windToday = document.querySelector("#wind-today")
        var iconToday = document.getElementById("icon-today")
        
        // shows current weather
        weatherTitle.innerHTML =  "Current Weather " 
        iconToday.innerHTML = iconDisplay
        tempToday.innerHTML = "Temprature: " + currentTemp;
        humidToday.innerHTML = "Humidity: " + currentHumid;
        windToday.innerHTML = "Winds: " + currentWind;
        


}

>>>>>>> feature/weatherAPI
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


<<<<<<< HEAD
searchBtn.addEventListener("click", searchHandler);
=======
searchBtn.addEventListener("click", searchHandler);
searchInput.addEventListener("keyup", function (event) {
    if (event.key === 13) {
        searchHandler(cityName)
    }

});

>>>>>>> feature/weatherAPI
