String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    // 37.55171193825559, -121.96650245722357
const part = "hourly";
/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}



/* ---- GET FONT ---- */
WebFont.load({ google: { families: ['Open Sans', 'Hachi Maru Pop', ] } });