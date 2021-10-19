const bookmarkBtn = document.querySelector('.js-bookmark');
const bookmarkIcon = document.querySelector('.js-icon')

bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('bookmarked');
    bookmarkIcon.classList.toggle('bookmarked');
})