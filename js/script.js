String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var today = new Date();
var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var legend = "Last Updated " + String(date) + '  ' + String(time);

var date_html = document.getElementById("current_date");
date_html.innerHTML = legend;

// Gallery Page
const images = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -5px 0px "
};

const imgObserver = new IntersectionObserver(function(entries, imgObserver) {
    entries.forEach(entry => {
        //console.log(entry.target);
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
        //entry.target.classList.toggle("opacity");
    });
}, imgOptions);

images.forEach(image => { imgObserver.observe(image); });

/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}

/* ---- WEATHER API ----*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=da417c202ea85673351a222150ce05af";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
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
        console.log(jsObject);
        for (var i = 0; i < 5; i++) {
            jsObject.includes("18:00:00")
        }
    });