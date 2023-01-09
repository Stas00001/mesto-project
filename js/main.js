const profile = document.querySelector('.profile');
const publications = document.querySelector('.publications');
const buttonsOpenPopup = document.querySelectorAll('.popup-open');
const popupImage = document.getElementById('popup_image')
const buttonsClosePopup = document.querySelectorAll('.popup__close-btn');
const buttonsSavePopup = document.querySelectorAll('.popup__save-btn');
const popupProfile = document.getElementById('popup_profile');
const deleteBtn = document.querySelector('.publications__btndelete');
const popup = document.querySelector('.popup');
const addCardPopup = document.getElementById('popup_add');
const popupCardImage = document.querySelector('.popup__images');
const popupText = document.querySelector('.popup__text');
const btnEditProfile = document.querySelector('.profile__btn_type_edit');
const btnAddCard = document.querySelector('.profile__btn_type_add');
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
  }
];



function popupOpen(curentPopup) {
    curentPopup.classList.add('popup_opened');
}
function popupClose(curentPopup) {
      curentPopup.classList.remove('popup_opened');

};

buttonsClosePopup.forEach(button => {
  button.addEventListener('click', function(evt) {
    popupClose(evt.currentTarget.closest('.popup'));
  })
})


btnAddCard.addEventListener('click', function (evt) {
  popupOpen(addCardPopup);
});
btnEditProfile.addEventListener('click', function (evt) {
  popupOpen(popupProfile);
});
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="job"]');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

nameInput.value = nameProfile.textContent;
jobInput.value = aboutProfile.textContent;

function handleFormSubmit(evt) {

    evt.preventDefault();
    const nameInputValue  = nameInput.value;
    const jobInputValue = jobInput.value;

    nameProfile.textContent = nameInputValue;
    aboutProfile.textContent = jobInputValue;
    popupClose(popupProfile);
}


formElement.addEventListener('submit', handleFormSubmit);

const formCards = document.querySelector('.popup__form[name="cards"]');
const nameInputCard = formCards.querySelector('.popup__input[name="nameCards"]');
const imageInputCard = formCards.querySelector('.popup__input[name="imageCards"]');

function createCard(newCard) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  const titleCard = card.querySelector('.publications__title');
  const imageCard = card.querySelector('.publications__image');
    titleCard.textContent = newCard.name;
    imageCard.src = newCard.link;
    imageCard.alt = newCard.name;
    card.querySelector('.publications__btnlike').addEventListener('click', function (evt) {
      evt.target.classList.toggle('publications__btnlike_active');
    });
    card.querySelector('.popup-open').addEventListener('click', function (evt) {
      evt.preventDefault();
     popupCardImage.src = newCard.link;
     popupText.textContent = newCard.name;
     popupCardImage.alt = newCard.name;
      popupOpen(popupImage);
    });

    const buttonsDeleteCard = card.querySelector('.publications__btndelete');
    const publicationsCards = document.querySelectorAll('.publications__card');

      buttonsDeleteCard.addEventListener('click', function (evt) {
        card.remove(card);
      });
      return card;

}


function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  const newCard = {};
   newCard.name = nameInputCard.value;
   newCard.link = imageInputCard.value;
  publications.prepend(createCard(newCard));
  nameInputCard.value = '';
  imageInputCard.value = '';
  popupClose(addCardPopup);
}
initialCards.forEach((newCard) => {
  publications.append(createCard(newCard));
});

formCards.addEventListener('submit', handleFormSubmitAddCard);



/*
initialCards.forEach((item) => {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  card.querySelector('.publications__title').textContent = item.name;
  card.querySelector('.publications__image').src = item.link;
  card.querySelector('.publications__image').alt = item.name;

  card.querySelector('.publications__btnlike').addEventListener('click', function (evt) {
    evt.target.classList.toggle('publications__btnlike_active');
  });
  card.querySelector('.popup-open').addEventListener('click', function (evt) {
    evt.preventDefault();
    const cardImage = document.querySelector('.card-image').src = item.link;
    const popupText = document.querySelector('.popup__text').textContent = item.name;
    const cardImageAlt = document.querySelector('.card-image').alt = item.name;

    popupImage.classList.add('popup_opened');
  });
  const buttonDeleteCard = card.querySelectorAll('.publications__btndelete');
  const publicationsCards = document.querySelectorAll('.publications__card');

  function handler(evt) {
       evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  }

  function deleteItem(buttonDelete, childcards) {
    for (let i=0; i < buttonDelete.length; i++) {
      buttonDelete[i].addEventListener('click', handler);
    }
  }

  deleteItem(buttonDeleteCard, publicationsCards);

  publications.append(card);
});
*/
