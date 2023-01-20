function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayWeather);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
};

function displayWeather(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var requestWeather =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=7a15c3334d6b00f3714da34b31d34a10";
    fetch(requestWeather)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var currentCity = data.city.name;
            var currentTemp = data.list[0].main.temp;
            var currentTempFahrenheit = (
                ((currentTemp - 273.15) * 9) / 5 +
                32
            ).toFixed(0);
            var currentWeatherIcon = data.list[0].weather[0].icon;
            var weatherIcon = document.getElementById("weatherIcon");
            var imageURL =
                "https://openweathermap.org/img/wn/" + currentWeatherIcon + "@2x.png";
            var cityAndTemp = document.getElementById("currentWeather");

            cityAndTemp.textContent =
                currentCity + " " + currentTempFahrenheit + "\u00B0F";
            weatherIcon.setAttribute("src", imageURL);
        });
};

getLocation();