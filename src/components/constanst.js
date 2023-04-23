export const configApi = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: 'a06d07f4-0395-4028-bda1-ecc0fed6969d',
    'Content-Type': 'application/json',
  }
}

export const selectorPublications = '.publications';

export const nameProfile = document.querySelector('.profile__name');
export const aboutProfile = document.querySelector('.profile__about');
export const avatarProfile = document.querySelector('.profile__avatar');

export const nameEditForm = document.getElementById('name-input');
export const aboutEditForm = document.getElementById('about-input');

export const popupWithImageSelector = '.popup-image';
export const popupEditProfileSelector = '.popup-edit-profile'

export const idProfile = {}; // id профиля
export const cardTemplateSelector = '.cards'

// : Кнопки
export const buttonEditProfile = document.querySelector('.profile__btn_type_edit');
