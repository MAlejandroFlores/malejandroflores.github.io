/* ---- FETCH DIRECTORY CARDS ---- */
function getDirectoryCards() {
    /* ---- FECTH JSON DATA ---- */
    const requestURL = 'https://malejandroflores.github.io/FinalProject/common/directory.json';

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const businesses = data['businesses'];
            for (const business of businesses) {
                let card = document.createElement('section');
                let textInfo = document.createElement('div');
                textInfo.setAttribute("class", "card_text_area");
                let name = document.createElement('h2');
                let contact = document.createElement('p');
                contact.setAttribute("class", "b_contact");
                let description = document.createElement('p');
                description.setAttribute('class', "b_description");
                let logo = document.createElement('div');
                logo.setAttribute("class", "card_logo_area");
                let image = document.createElement('img');

                name.textContent = business.name;
                contact.textContent = business.contact_info;
                description.textContent = business.description;
                image.setAttribute('src', 'images/business/' + business.logo_file);

                textInfo.appendChild(name);
                textInfo.appendChild(contact);
                textInfo.appendChild(description);

                logo.appendChild(image);

                card.appendChild(textInfo);
                card.appendChild(logo);


                document.querySelector('.card_container').appendChild(card);
            }
        });

    // fetch(requestURL)
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(jsonObject) {
    //         //console.table(jsonObject); // temporary checking for valid response and data parsing
    //         const businessInfo = jsonObject['business'];
    //         businessInfo.forEach(element => {

    //         }); {
    //             if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
    //                 let card = document.createElement('section');
    //                 let textDiv = document.createElement('div');
    //                 textDiv.setAttribute('class', "cards-text-area");
    //                 let h2 = document.createElement('h2');
    //                 let h3 = document.createElement('h3');
    //                 let y = document.createElement('p');
    //                 let p = document.createElement('p');
    //                 let r = document.createElement('p');
    //                 let imgDiv = document.createElement('div');
    //                 imgDiv.setAttribute("class", "cards-img-area")
    //                 let image = document.createElement('img');
    //                 let alt = towns[i].name;

    //                 h2.textContent = towns[i].name;
    //                 h3.textContent = towns[i].motto;
    //                 y.textContent = 'Year Founded: ' + towns[i].yearFounded;
    //                 p.textContent = 'Population : ' + towns[i].currentPopulation;
    //                 r.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
    //                 image.setAttribute('src', "images/" + towns[i].photo);
    //                 image.setAttribute('alt', alt)


    //                 textDiv.appendChild(h2);
    //                 textDiv.appendChild(h3);
    //                 textDiv.appendChild(y);
    //                 textDiv.appendChild(p);
    //                 textDiv.appendChild(r);

    //                 imgDiv.appendChild(image);

    //                 card.appendChild(textDiv);
    //                 card.appendChild(imgDiv);

    //                 document.querySelector('div.cards').appendChild(card);
    //             }
    //         }
    //     });
}

getDirectoryCards();