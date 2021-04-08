String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}

/* ---- INSERT DATE ---- */
function insertDate() {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current_date').textContent = new Date().toLocaleDateString('en-US', options);
}


/* ---- GET FONT ---- */
WebFont.load({ google: { families: ['Open Sans', 'Gudea', 'RocknRoll One', 'IBM Plex Sans', 'Material Icons'] } });

insertDate();