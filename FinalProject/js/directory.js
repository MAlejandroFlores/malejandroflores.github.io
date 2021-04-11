/* ---- FETCH DIRECTORY CARDS ---- */
function getDirectoryCards() {
    /* ---- FECTH JSON DATA ---- */
    const requestURL = 'https://malejandroflores.github.io/FinalProject/common/directory.json';

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const businesses = data['businesses'];
            for (const business of businesses) {
                let card = document.createElement('section');
                let textInfo = document.createElement('div');
                textInfo.setAttribute("class", "card_text_area");
                let logo = document.createElement('div');
                logo.setAttribute("class", "card_logo_area");

                let nameLink = document.createElement('a');
                let imageLink = document.createElement('a');
                let webpageLink = document.createElement('a');

                let name = document.createElement('h2');
                let phone = document.createElement('p');
                let image = document.createElement('img');
                let address = document.createElement('p');
                let web_page = document.createElement('p');

                phone.setAttribute("class", "b_phone");
                address.setAttribute('class', "b_description");

                name.textContent = business.name;
                phone.textContent = business.phone;
                address.textContent = business.address;
                web_page.textContent = "Web Page";

                image.setAttribute('src', 'images/business/' + business.logo_file);
                image.setAttribute('alt', business.name);

                nameLink.setAttribute('href', business.web_link);
                nameLink.setAttribute('target', "_blank");

                imageLink.setAttribute('href', business.web_link);
                imageLink.setAttribute('target', "_blank");

                webpageLink.setAttribute('href', business.web_link);
                webpageLink.setAttribute('target', "_blank");

                nameLink.appendChild(name);
                imageLink.appendChild(image);
                webpageLink.appendChild(web_page);

                textInfo.appendChild(name);
                // textInfo.appendChild(nameLink);
                textInfo.appendChild(webpageLink);
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