String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var today = new Date();
var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var legend = "Last Updated " + String(date) + '  ' + String(time);

var date_html = document.getElementById("current_date");
date_html.innerHTML = legend;

// Gallery Page
const images = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -5px 0px "
};

const imgObserver = new IntersectionObserver(function(entries, imgObserver) {
    entries.forEach(entry => {
        //console.log(entry.target);
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
        //entry.target.classList.toggle("opacity");
    });
}, imgOptions);

images.forEach(image => { imgObserver.observe(image); });




/* ---- HAMBURGER MENU ---- */
function toggleMenu() {
    document
        .getElementsByClassName("nav_menu")[0]
        .classList.toggle("responsive");
}