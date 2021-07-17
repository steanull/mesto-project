const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile-info__button');
const editProfileJob = document.querySelector('.profile-info__subtitle');
const editProfileName = document.querySelector('.profile-info__title');
const formCardElement = document.querySelector('.card-form');
const formEditElement = document.querySelector('.edit-form');
const nameInput = formEditElement.querySelector('.edit-name');
const jobInput = formEditElement.querySelector('.edit-job');
const nameCardInput = formCardElement.querySelectorAll('.form__item')[0];
const ImageCardInput = formCardElement.querySelectorAll('.form__item')[1];
const elementsList = document.querySelector('.elements__list');
const popupCard = document.querySelector('.popup-card');
const addCardBtn = document.querySelector('.profile__button');
const popupCardCloseBtn = popupCard.querySelector('.popup__close');
const popupGallery = document.querySelector('.popup-gallery');
const popupGalleryCloseBtn = popupGallery.querySelector('.popup-gallery__button');
const popupGalleryTitle = popupGallery.querySelector('.popup-gallery__title');
const popupGalleryImage = popupGallery.querySelector('.popup-gallery__image');
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

//Функция добавления класса для открытия popup
function openPopup(element) {
    element.classList.add('popup_opened');
}

//Функция добавления класса для открытия Gallery
function openGallery(element) {
    element.classList.add('popup-gallery_opened');
}

//Функция удаления класса для закрытия Gallery
function closeGallery(element) {
    element.classList.remove('popup-gallery_opened');
}

//Функция удаления класса для закрытия popup
function closePopup(element) {
    element.classList.remove('popup_opened');
}

//Открытие попап-формы путем нажатия на кнопку "Edit"
editProfileBtn.addEventListener('click', function () {
    openPopup(popup);
});

//Функция проверки наличия текста в полях, записи введенного текста в переменные, закрытия формы
function formEditSubmitHandler(event) {
    event.preventDefault();
    if (nameInput.value && jobInput.value) {
        editProfileName.textContent = nameInput.value;
        editProfileJob.textContent = jobInput.value;
        closePopup(popup);
    }
}

//Закрытие попап-формы по нажатию на кнопку "крестик"
popupCloseBtn.addEventListener('click', function () {
    closePopup(popup);
});

//Закрытие попап-формы по нажатию на пустое поле
popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popup);
    }
})

//Закрытие попап-формы по нажатию на "Escape"
window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        closePopup(popup);
    }
};

//Слушатель события (нажатие на кнопку типа submit)
formEditElement.addEventListener('submit', formEditSubmitHandler);

//Открытие попап-формы путем нажатия на кнопку "Плюс"
addCardBtn.addEventListener('click', function () {
    openPopup(popupCard);
});

//Функция добавления нового элемента в начало
function addCard(cardElement, cardContainer) {
    const card = newCard(cardElement);
    cardContainer.prepend(card);
}

//функция присвоения необходимых значений карточке, которая возвращает заполненную карточку + удаление карточки по иконке + открытие галереи по нажатию
function newCard(cardData) {
    const cardTemplate = document.querySelector('#element').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__image');
    const cardLike = cardElement.querySelector('.element__button');
    const cardRemover = cardElement.querySelector('.element__icon');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardImage.addEventListener('click', function () {
        popupGalleryImage.src = cardData.link;
        popupGalleryTitle.textContent = cardData.name;
        openGallery(popupGallery);
    })
    cardLike.addEventListener('click', function () {
        buttonLike(cardLike);
    })
    cardRemover.addEventListener('click', function () {
        removeCart(cardElement);
    })
    return cardElement;
}

//Закрытие Галереи по нажатию на кнопку "крестик"
popupGalleryCloseBtn.addEventListener('click', function () {
    closeGallery(popupGallery);
});

//Закрытие Галереи по нажатию на "Escape"
window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        closeGallery(popupGallery);
    }
};

//Закрытие Галереи по нажатию на пустое поле
popupGallery.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeGallery(popupGallery);
    }
})


//Функция добавления-удаления класса element__button_active кнопке лайка в зависимости от состояния
function buttonLike(element) {
    element.classList.toggle('element__button_active');
}

//Перебор массива по порядку, добавление в DOM
initialCards.forEach((item) => {
    addCard(item, elementsList);
});

//Функция проверки наличия текста в полях, записи введенных значений, закрытия формы
function formCardSubmitHandler(event) {
    event.preventDefault();
    if (nameCardInput.value && ImageCardInput.value) {
        addCard({
            name: nameCardInput.value,
            link: ImageCardInput.value
        }, elementsList)
        closePopup(popupCard);
    }
}

//Функция удаления элемента
function removeCart(element) {
    element.remove();
}

//Закрытие попап-формы по нажатию на кнопку "крестик"
popupCardCloseBtn.addEventListener('click', function () {
    closePopup(popupCard);
});

//Закрытие попап-формы по нажатию на "Escape"
window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        closePopup(popupCard);
    }
};

//Закрытие попап-формы по нажатию на пустое поле
popupCard.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupCard);
    }
})

//Слушатель события (нажатие на кнопку типа submit)
formCardElement.addEventListener('submit', formCardSubmitHandler);