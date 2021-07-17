const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile-info__button');
const editProfileJob = document.querySelector('.profile-info__subtitle');
const editProfileName = document.querySelector('.profile-info__title');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.edit-name');
const jobInput = formElement.querySelector('.edit-job');


function openPopup(element) {
    element.classList.add('popup_opened');
}

function closePopup(element) {
    element.classList.remove('popup_opened');
}

editProfileBtn.addEventListener('click', function () {
    openPopup(popup);
});

popupCloseBtn.addEventListener('click', function () {
    closePopup(popup);
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    if (nameInput.value && jobInput.value) {
        editProfileName.textContent = nameInput.value;
        editProfileJob.textContent = jobInput.value;
        closePopup(popup);
    }
}
formElement.addEventListener('submit', formSubmitHandler);