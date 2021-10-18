const hamburgerEl = document.querySelector(".js-humburger");
const navigationLinks = document.querySelector(".js-navlinks");
const closeBtn = document.querySelector(".js-close");

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.add("hide")
    navigationLinks.classList.add('show')
});

closeBtn.addEventListener('click', () => {
    navigationLinks.classList.remove('show');
    hamburgerEl.classList.remove('hide');
});