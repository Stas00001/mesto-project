const profile = document.querySelector('.profile');
const profileBtn = document.querySelector('.profile__btn');
const publications = document.querySelector('.publications');
const openPopupProfile = document.querySelectorAll('.profile__btn_type_edit');
const openpopupAddCard = document.querySelectorAll('.profile__btn_type_add');
const openPopupImage = document.querySelectorAll('.popup-link');
const popupImage = document.getElementById('popup_image')
const popupBtnClose = document.querySelectorAll('.popup__close-btn');
const btnSave = document.querySelector('.popup__save-btn');
const popupProfile = document.getElementById('popup_profile');
const popupAddCard = document.getElementById('popup_add');

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

openPopupImage.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        popupImage.classList.add('popup_opened');
        console.log(e);
    })
});

openPopupProfile.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupProfile.classList.add('popup_opened');
    })
});



popupBtnClose.forEach((button) => {
  button.addEventListener('click', (e) =>{
    e.preventDefault();
    popupProfile.classList.remove('popup_opened');
    popupAddCard.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
  })
});

openpopupAddCard.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupAddCard.classList.add('popup_opened');
    })
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
    popupProfile.classList.remove('popup_opened');

}

formElement.addEventListener('submit', handleFormSubmit);

const cardsForm = document.querySelector('.popup__form[name="cards"]');

function addCards (namaValue, imageValue) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  card.querySelector('.publications__title').textContent = namaValue;
  card.querySelector('.publications__image').src = imageValue;
  card.querySelector('.publications__btnlike').addEventListener('click', function (evt) {
    evt.target.classList.toggle('publications__btnlike_active');
  });
  card.querySelector('.popup-link').addEventListener('click', function (evt) {
    card.querySelector('.popup-link').addEventListener('click', function (evt) {
      const cardImageValue = document.querySelector('.card-image').src = imageValue;
      const popupTextValue = document.querySelector('.popup__image_text').textContent = namaValue;
      popupImage.classList.add('popup_opened');
    });
    popupImage.classList.add('popup_opened');
  });
  publications.prepend(card);
}

function handleFormSubmitCards(evt) {
    evt.preventDefault();
    const nameCard  = document.querySelector('.popup__input[name="nameCard"]');
    const imageCard  = document.querySelector('.popup__input[name="images"]');
    addCards(nameCard.value, imageCard.value);
    popupAddCard.classList.remove('popup_opened');

}
cardsForm.addEventListener('submit', handleFormSubmitCards);

initialCards.forEach((item) => {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  card.querySelector('.publications__title').textContent = item.name;
  card.querySelector('.publications__image').src = item.link;
  card.querySelector('.publications__btnlike').addEventListener('click', function (evt) {
    evt.target.classList.toggle('publications__btnlike_active');
  });
  card.querySelector('.popup-link').addEventListener('click', function (evt) {
    const cardImage = document.querySelector('.card-image').src = item.link;
    const popupText = document.querySelector('.popup__image_text').textContent = item.name;
    popupImage.classList.add('popup_opened');
  });
  publications.append(card);

});
