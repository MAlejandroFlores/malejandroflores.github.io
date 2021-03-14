const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=da417c202ea85673351a222150ce05af";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var tempF = (parseFloat(jsObject.main.temp) - 273.15) * 9 / 5 + 32;
        var tempC = (tempF - 32) * 5 / 9;
        document.getElementById('current-temp').textContent = tempF.toFixed(2); //Formula	(0K − 273.15) × 9/5 + 32 
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });