const modalEl = document.querySelector('.js-modal-default');

const backProjectLinks = document.querySelectorAll('.js-back-project')

const closeModalEl = document.querySelector('.js-close-modal')

backProjectLinks.forEach(link => {
    link.addEventListener('click', openDefaultModal())
});

function openDefaultModal() {
    modalEl.classList.add('modal-visible');
    overlay.classList.add('modal-shown');

}

closeModalEl.addEventListener('click', () => {
    modalEl.classList.remove('modal-visible');
    overlay.classList.remove('modal-shown')
})