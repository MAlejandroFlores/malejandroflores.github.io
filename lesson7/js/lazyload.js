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