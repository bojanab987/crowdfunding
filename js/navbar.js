const hamburgerEl = document.querySelector(".js-humburger");
const navigationLinks = document.querySelector(".js-navlinks");
const closeBtn = document.querySelector(".js-close");
const page = document.querySelector(".js-page");

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.add("hide");
    navigationLinks.classList.add('show');
    page.classList.add('nav-shown');
});

closeBtn.addEventListener('click', () => {
    navigationLinks.classList.remove('show');
    hamburgerEl.classList.remove('hide');
    page.classList.remove('nav-shown');
});