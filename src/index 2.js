import { popupClose, popupOpen, formElement, popupProfile } from "./components/modal.js";
import { handleFormSubmit } from "./components/utils.js";
import { formCards, handleFormSubmitAddCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import './pages/index.css';
const buttonsClosePopup = document.querySelectorAll('.popup__close-btn');
const btnAddCard = document.querySelector('.profile__btn_type_add');
const btnEditProfile = document.querySelector('.profile__btn_type_edit');
const addCardPopup = document.getElementById('popup_add');

buttonsClosePopup.forEach(button => {
  button.addEventListener('click', function(evt) {
    popupClose(evt.currentTarget.closest('.popup'));
  })
  })
  
  document.addEventListener('keydown', function (evt) {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    const popupActive = document.querySelector('.popup.popup_opened');
    popupClose(popupActive);
  } 
  })
  
  
  btnAddCard.addEventListener('click', function (evt) {
  popupOpen(addCardPopup);
  });
  btnEditProfile.addEventListener('click', function (evt) {
  popupOpen(popupProfile);
  });

formElement.addEventListener('submit', handleFormSubmit);
formCards.addEventListener('submit', handleFormSubmitAddCard);
enableValidation();