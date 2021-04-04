/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}

function displayRateValue(rate) {
    document.getElementById("severityValue").innerHTML = rate;
}