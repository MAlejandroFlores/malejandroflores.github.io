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


}

getDirectoryCards();