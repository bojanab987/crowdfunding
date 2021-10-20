const hamburgerEl = document.querySelector(".js-humburger");
const navigationLinks = document.querySelector(".js-navlinks");
const closeBtn = document.querySelector(".js-close");
const overlay = document.querySelector('.js-modal-overlay');
const linksEl = document.querySelectorAll(".js-nav-link");

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.add("hide");
    navigationLinks.classList.add('show');
    overlay.classList.add('nav-shown');
});

closeBtn.addEventListener('click', () => {
    navigationLinks.classList.remove('show');
    hamburgerEl.classList.remove('hide');
    overlay.classList.remove('nav-shown');
});

linksEl.forEach(link => {
    link.addEventListener('click', () => {
        if (navigationLinks.classList.contains('show')) {
            navigationLinks.classList.remove('show');
            overlay.classList.remove('nav-shown');
            hamburgerEl.classList.remove('hide');
        }

    })
});

