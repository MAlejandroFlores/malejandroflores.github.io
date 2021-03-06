/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}

/* ---- FECTH JSON DATA ---- */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let y = document.createElement('p');
            let p = document.createElement('p');
            let r = document.createElement('p');
            let image = document.createElement('img');
            let alt = towns[i].events;


            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            y.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p.textContent = 'Populatio : ' + towns[i].currentPopulation;
            r.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', "images/" + towns[i].photo);
            image.setAttribute('alt', alt)

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(y);
            card.appendChild(p);
            card.appendChild(r);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });