const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile-info__button');
const editProfileJob = document.querySelector('.profile-info__subtitle');
const editProfileName = document.querySelector('.profile-info__title');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.edit-name');
const jobInput = formElement.querySelector('.edit-job');
const elementsList = document.querySelector('.elements__list');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function newCard(cardData) {
    const cardTemplate = document.querySelector('#element').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__image');
    const cardLike = cardElement.querySelector('.element__button');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    return cardElement;
}

function addCard(cardElement, cardContainer) {
    const card = newCard(cardElement);
    cardContainer.prepend(card);
}

initialCards.forEach ((item) => {
    addCard(item, elementsList);
});

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