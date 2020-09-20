var searchBtn = document.getElementById("search-btn");
var searchInput = document.getElementById("search-input");
var searchHistory = document.getElementById("search-history");


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
        swal("You entered an invalid city name!", "Please enter a valid one");
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

// function to call back clickable cities from the history
var clickCity = function () {
    var cityName = this.id;
    getWeatherInfo(cityName);
}


searchBtn.addEventListener("click", searchHandler);