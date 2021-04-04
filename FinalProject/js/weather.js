/* ---- WEATHER API ---- */
function getWeather() {
    const api_forecast_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.55171193825559&lon=-121.96650245722357&units=imperial&appid=da417c202ea85673351a222150ce05af';
    fetch(api_forecast_URL)
        .then(response => response.json())
        .then(jsObject => {
            //console.log(jsObject);

            // Weather Summary
            var curr_temp = Math.round(parseFloat(jsObject.current.temp));
            var curr_des = jsObject.current.weather[0].description.capitalize();
            var humidity = jsObject.current.humidity;

            document.getElementById('currTemp').innerHTML = curr_temp + " &deg; F";
            document.getElementById('currCond').innerHTML = curr_des;
            document.getElementById('humidity').innerHTML = humidity;

            // Weather Forecast
            var today = new Date();
            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (var plusDay = 1; plusDay <= 3; plusDay++) {
                var targetDay = jsObject.daily[plusDay - 1];

                const imagesrc = 'https://openweathermap.org/img/w/' + targetDay.weather[0].icon + '.png';
                const desc = targetDay.weather[0].description.capitalize();
                document.getElementById('forecast_day_' + plusDay).textContent = weekdays[(today.getDay() + plusDay) % 7];
                document.getElementById('forecast_icon_' + plusDay).setAttribute('src', imagesrc);
                document.getElementById('forecast_icon_' + plusDay).setAttribute('alt', desc)
                document.getElementById('forecast_temp_' + plusDay).innerHTML = Math.round(targetDay.temp.day) + " &deg; F";
            }
        });
}

getWeather();