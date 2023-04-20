import { formCards } from "./Card";
import { config, resetError } from "./validate";
export { popupOpen, popupClose, formProfile, popupProfile, addCardPopup, popupCardImage, 
popupText, popupImage, closePopupEsc, closePopupOutside, formAvatar};
const formProfile = document.getElementById('formProfile');
const formAvatar = document.getElementById('formAvatar');
const popupProfile = document.getElementById('popup_profile');
const addCardPopup = document.getElementById('popup_add');
const popupCardImage = document.querySelector('.popup__images');
const popupText = document.querySelector('.popup__text');
const popupImage = document.getElementById('popup_image')
const popup = document.querySelectorAll('.popup');
const popupActive = document.querySelector('.popup.popup_opened');

popup.forEach((popup) => {
  popup.addEventListener('mousedown', closePopupOutside);
})

function popupOpen(curentPopup) {
  curentPopup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}


function popupClose(curentPopup) {
  curentPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popupClose(popupActive);
  }
}

function closePopupOutside(evt) {
    if (!evt.target.closest('.popup__body')) {
      popupClose(evt.target.closest('.popup'));
    }
  }