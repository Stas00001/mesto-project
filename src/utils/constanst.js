export const configApi = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: 'a06d07f4-0395-4028-bda1-ecc0fed6969d',
    'Content-Type': 'application/json',
  }
};

export const configValidator = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

export const popupsList = [...document.querySelectorAll('.popup-validation')]

export const selectorPublications = '.publications';

export const nameProfile = document.querySelector('.profile__name');
export const aboutProfile = document.querySelector('.profile__about');
export const avatarProfile = document.querySelector('.profile__avatar-image');

export const nameEditForm = document.getElementById('name-input');
export const aboutEditForm = document.getElementById('about-input');

export const popupWithImageSelector = '.popup-image';
export const popupEditProfileSelector = '.popup-edit-profile';
export const popupEditAvatarSelector = '.popup-edit-avatar'
export const popupAddCardSelector = '.popup-add-card'

export const idProfile = {}; // id профиля
export const cardTemplateSelector = '.cards'

// : Кнопки
export const buttonEditProfile = document.querySelector('.profile__btn_type_edit');
export const buttonEditAvatar = document.querySelector('.profile__button-edit-avatar');
export const buttonAddCard = document.querySelector('.profile__button-add-card');
