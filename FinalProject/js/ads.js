/* ---- FETCH DIRECTORY CARDS ---- */
function insertAds() {
    /* ---- FECTH JSON DATA ---- */
    const requestURL = 'https://malejandroflores.github.io/FinalProject/common/directory.json';
    const companiesAds = ["Kidango", "Joe's Corner", "Fremont Flowers"];

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const businesses = data['businesses'];
            for (const business of businesses) {
                for (const ad of companiesAds) {
                    if (business.name == ad) {
                        let card = document.createElement('section');
                        let textInfo = document.createElement('div');
                        textInfo.setAttribute("class", "card_text_area");
                        let name = document.createElement('h2');
                        let phone = document.createElement('p');
                        phone.setAttribute("class", "b_phone");
                        let address = document.createElement('p');
                        address.setAttribute('class', "b_description");
                        let logo = document.createElement('div');
                        logo.setAttribute("class", "card_logo_area");
                        let image = document.createElement('img');

                        name.textContent = business.name;
                        phone.textContent = business.phone;
                        address.textContent = business.address;
                        image.setAttribute('src', 'images/business/' + business.logo_file);

                        textInfo.appendChild(name);
                        textInfo.appendChild(phone);
                        textInfo.appendChild(address);

                        logo.appendChild(image);

                        card.appendChild(textInfo);
                        card.appendChild(logo);


                        document.querySelector('.companies_ads').appendChild(card);
                    }
                }
            }
        });


}

insertAds();