export { popupOpen, popupClose, formProfile, popupProfile, addCardPopup, popupCardImage, 
popupText, popupImage, closePopupEsc, closePopupOutside };
const formProfile = document.getElementById('formProfile');
const popupProfile = document.getElementById('popup_profile');
const addCardPopup = document.getElementById('popup_add');
const popupCardImage = document.querySelector('.popup__images');
const popupText = document.querySelector('.popup__text');
const popupImage = document.getElementById('popup_image')

function popupOpen(curentPopup) {
  curentPopup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener('mousedown', closePopupOutside);
}

function popupClose(curentPopup) {
  curentPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOutside)
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const popupActive = document.querySelector('.popup.popup_opened');
    popupClose(popupActive);
  }
}

function closePopupOutside(evt) {
    if (!evt.target.closest('.popup__body')) {
      popupClose(evt.target.closest('.popup'));
    }
}