/* ---- WEATHER API ----*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=da417c202ea85673351a222150ce05af";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        var curr_temp = Math.round(parseFloat(jsObject.main.temp));
        var curr = jsObject.weather[0].description.capitalize();
        var highF = Math.round(parseFloat(jsObject.main.temp_max));
        var wind_s = (jsObject.wind.speed).toFixed(1);
        var hum = jsObject.main.humidity;
        var wind_c = 'N/A';
        if (curr_temp < 50 && wind_s > 3) {
            wind_c = 35.74 + (0.6215 * curr_temp) - (35.75 * wind_s ** 0.16) + (.4275 * curr_temp * wind_s ** 0.16)
            wind_c = wind_c.toFixed(1) + " &deg; F";
        }

        //var tempC = (tempF - 32) * 5 / 9; // Celsius
        document.getElementById('currently').innerHTML = curr_temp + " &deg; F, " + curr;
        document.getElementById('high').innerHTML = highF + " &deg; F";
        document.getElementById('wind_chill').innerHTML = wind_c;
        document.getElementById('humidity').innerHTML = hum + " %";
        document.getElementById('wind_speed').innerHTML = wind_s + " mph";
    });

const api_forecast_URL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=da417c202ea85673351a222150ce05af";
fetch(api_forecast_URL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject.list);
        var i = 1;
        jsObject.list.forEach(element => {
            //console.log(element.dt_txt)
            if (element.dt_txt.includes("18:00")) {
                //console.log(element.dt_txt);
                let day = 0;
                let today = new Date();

                const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';

                document.getElementById('forecast_day_' + i).innerHTML = weekdays[today.getDay() + i];
                document.getElementById('forecast_icon_' + i).setAttribute('src', imagesrc);
                document.getElementById('forecast_' + i).innerHTML = Math.round(element.main.temp) + " &deg; F";
                i++;
            }
        });
    });