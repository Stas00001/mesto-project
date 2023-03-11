import { popupClose, popupOpen, formProfile, popupProfile, closePopupEsc, closePopupOutside } from "./modal.js";
import { formCards, nameInputCard, imageInputCard, publications, createCard, initialCards } from "./card.js";
import { enableValidation, config, toggleButtonState } from "./validate.js";
import '../pages/index.css';
const buttonsClosePopup = document.querySelectorAll('.popup__close-btn');
const btnAddCard = document.querySelector('.profile__btn_type_add');
const btnEditProfile = document.querySelector('.profile__btn_type_edit');
const addCardPopup = document.getElementById('popup_add');
const buttonSumbit = document.getElementById('submitCard');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="job"]');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');


initialCards.forEach((newCard) => {
  publications.append(createCard(newCard));
});

buttonsClosePopup.forEach(button => {
  button.addEventListener('click', function (evt) {
    popupClose(evt.currentTarget.closest('.popup'));
  })
});

btnAddCard.addEventListener('click', function (evt) {
  popupOpen(addCardPopup);
});

btnEditProfile.addEventListener('click', function (evt) {
  popupOpen(popupProfile);
});
nameInput.value = nameProfile.textContent;
jobInput.value = aboutProfile.textContent;


function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  nameProfile.textContent = nameInputValue;
  aboutProfile.textContent = jobInputValue;
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
  popupClose(popupProfile);
}

formProfile.addEventListener('submit', handleFormSubmitProfile);

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = nameInputCard.value;
  newCard.link = imageInputCard.value;
  publications.prepend(createCard(newCard));
  formCards.reset();
  buttonSumbit.disabled = true;
  buttonSumbit.classList.add(config.inactiveButtonClass);
  popupClose(addCardPopup);
}

formCards.addEventListener('submit', handleFormSubmitAddCard);

enableValidation(config);
