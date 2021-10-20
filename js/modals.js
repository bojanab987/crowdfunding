const modalEl = document.querySelector('.js-modal-default');
const backProjectBtn = document.querySelector('.js-back-project');
const getStartedLink = document.querySelector('.js-start');
const closeModalEl = document.querySelector('.js-close-modal');
const radioBtns = document.querySelectorAll('.js-radio-btn');
const modalCompleted = document.querySelector('.js-modal-completed');
const closeCompletedModaldBtn = document.querySelector('.js-got-it');
const totalDonationAmountEl = document.querySelector('.js-total-donation');
const totalBackersEl = document.querySelector('.js-total-backers');
const progressBarEl = document.querySelector('.js-progress-bar');

const openModal = () => {
    modalEl.classList.add('modal-visible')
    modalEl.style.visibility = "visible";
    modalEl.style.opacity = "1";
    let classes = modalEl.getAttribute('class')
    console.log(classes)
    overlay.classList.add('modal-shown');
}
backProjectBtn.addEventListener('click', openModal);
getStartedLink.addEventListener('click', openModal);

closeModalEl.addEventListener('click', closeDefaultModal);

closeCompletedModaldBtn.addEventListener('click', () => {
    modalCompleted.classList.remove('visible');
    overlay.classList.remove('modal-shown');
})

function showPledgeDonationForm() {
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            const divModalOption = radioBtns[i].parentNode.parentNode;
            divModalOption.classList.add('selected-pledge');
            divModalOption.lastElementChild.classList.remove('hidden');
        } else {
            const divModalOption = radioBtns[i].parentNode.parentNode;
            divModalOption.classList.remove('selected-pledge');
            divModalOption.lastElementChild.classList.add('hidden')
        }
    }
}

function validateNumber(e) {
    const pattern = /^[0-9]$/;
    return pattern.test(e.key);
}

let totalDonations = parseInt(totalDonationAmountEl.innerText.slice(1).replace(",", ""));
let totalBackers = parseInt(totalBackersEl.innerText.replace(",", ""));

function incrementBackers() {
    totalBackers++;
    totalBackersEl.innerText = totalBackers.toString();
    return totalBackers;
}

const dolarSign = "$";
function increaseDonationAmount(amount) {
    console.log(amount)
    totalDonations += Number(amount)
    totalDonationAmountEl.innerText = `${dolarSign}${totalDonations}`;
    return totalDonations;
}

function increaseProgress() {
    progressBarEl.value = totalDonations;
}

function handleDonation() {
    const inputEls = document.querySelectorAll(`.js-amount`)
    for (let i = 0; i < inputEls.length; i++) {
        inputEls[i].addEventListener('change', (e) => {
            e.preventDefault();
            if (inputEls[i].value > 0) {
                if (inputEls[i].classList.contains("js-amount-25")) {
                    if (inputEls[i].value < 25) {
                        alert('Minimum donation for Bamboo Stand is $25. Thank you!');
                        inputEls[i].value = '';
                        return;
                    }
                } else if (inputEls[i].classList.contains("js-amount-75")) {
                    if (inputEls[i].value < 75) {
                        alert('Minimum donation for Black Edition Stand is $75. Thank you!');
                        inputEls[i].value = '';
                        return;
                    }

                }

            } else {
                alert('Donation amount have to be higher than 0. Thank you!');
                inputEls[i].value = '';
                return;
            }

        });
        increaseDonationAmount(inputEls[i].value);
        inputEls[i].value = '';
    }
    closeDefaultModal();
    openCompletedModal();
    incrementBackers();
    increaseProgress();
}

function closeDefaultModal() {
    modalEl.classList.remove('modal-visible');
    modalEl.style.visibility = "hidden";
    modalEl.style.opacity = "0";
    overlay.classList.remove('modal-shown');
}

function openCompletedModal() {
    modalCompleted.classList.add('visible');
    overlay.classList.add('modal-shown');
}