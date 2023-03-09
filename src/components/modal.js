export {popupOpen, popupClose, formElement, popupProfile, addCardPopup, popupCardImage, popupText, popupImage};
const formElement = document.querySelector('.popup__form');
const popupProfile = document.getElementById('popup_profile');
const addCardPopup = document.getElementById('popup_add');
const popupCardImage = document.querySelector('.popup__images');
const popupText = document.querySelector('.popup__text');
const popupImage = document.getElementById('popup_image')



function popupOpen(curentPopup) {
  curentPopup.classList.add('popup_opened');
  curentPopup.addEventListener('click', function(evt){
    if(!evt.target.closest('.popup__body')){
      popupClose(evt.target.closest('.popup'));
    }
  });

}
function popupClose(curentPopup) {
    curentPopup.classList.remove('popup_opened');

};

