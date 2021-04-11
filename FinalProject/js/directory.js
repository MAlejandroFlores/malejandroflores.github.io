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
                let nameLink = document.createElement('a');
                let name = document.createElement('h2');
                let phone = document.createElement('p');
                phone.setAttribute("class", "b_phone");
                let address = document.createElement('p');
                address.setAttribute('class', "b_description");
                let logo = document.createElement('div');
                logo.setAttribute("class", "card_logo_area");
                let imageLink = document.createElement('a');
                let image = document.createElement('img');

                name.textContent = business.name;
                phone.textContent = business.phone;
                address.textContent = business.address;
                image.setAttribute('src', 'images/business/' + business.logo_file);
                image.setAttribute('alt', business.name);
                nameLink.setAttribute('href', business.web_link);
                imageLink.setAttribute('href', business.web_link);
                nameLink.setAttribute('target', "_blank");
                imageLink.setAttribute('target', "_blank");
                nameLink.appendChild(name);
                imageLink.appendChild(image);

                // textInfo.appendChild(name);
                textInfo.appendChild(nameLink);
                textInfo.appendChild(phone);
                textInfo.appendChild(address);

                logo.appendChild(imageLink);

                card.appendChild(textInfo);
                card.appendChild(logo);


                document.querySelector('.card_container').appendChild(card);
            }
        });


}

function toList() {
    let card_container = document.querySelector('.card_container');

    // let card_container = let card = document.createElement('section');;
    card_container.classList.remove("card_grid");
    card_container.classList.add("card_list");

}

function toGrid() {

    let card_container = document.querySelector('.card_container');

    // let card_container = let card = document.createElement('section');;
    card_container.classList.add("card_grid");
    card_container.classList.remove("card_list");
}

getDirectoryCards();