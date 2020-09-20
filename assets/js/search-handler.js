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
        getCovidInfo(cityName);
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

    historyEl.onclick = clickCity;
}

// function to call back clickable cities from the history
var clickCity = function () {
    var cityName = this.id;
    getWeatherInfo(cityName);
}

// Google news API
var getCovidInfo = function (cityName) {
    var CovidURL = 'https://newsapi.org/v2/everything?' +
        'q=Covid-19&' +
        'from=2020-09-20&' +
        'sortBy=popularity&' +
        'apiKey=8aea300283df41ffbff28ff35de2567e';

    fetch(CovidURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                })
            } 
            // else {
            //     alert("Error: " + response.statusText);}
        })
};

searchBtn.addEventListener("click", searchHandler);