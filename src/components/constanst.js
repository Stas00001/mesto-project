export const configApi = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: 'a06d07f4-0395-4028-bda1-ecc0fed6969d',
    'Content-Type': 'application/json',
  }
}

export const selectorPublications = '.publications';
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="job"]');
export const nameProfile = document.querySelector('.profile__name');
export const aboutProfile = document.querySelector('.profile__about');
export const avatarProfile = document.querySelector('.profile__avatar');

// константы попапа
export const document = document.querySelector('.page');
export const PopupWithImageSelector = '.popup_image'

// id профиля
export const idProfile = {};
export const cardTemplateSelector = document.querySelector('.cards')
