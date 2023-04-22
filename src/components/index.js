//export {nameProfile, aboutProfile};
//import { popupClose, popupOpen, formProfile, popupProfile, formAvatar } from "./modal.js";
//import { formCards, nameInputCard, imageInputCard, publications, createCard } from "./Card.js";
//import { enableValidation, config, resetError} from "./validate.js";
// import { getUser, getCards, patchUser, postCard, avatarProfile } from "./Api.js";


import '../pages/index.css';
import Api from "./Api.js";
import Section from './Section.js'
import Card from './Card.js';

import {
  configApi,
  selectorPublications,
  nameProfile,
  aboutProfile,
  avatarProfile,
  idProfile,
  cardTemplateSelector,
  popupWithImageSelector
} from "./constanst.js";

import SubmitForm from './SubmitForm';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';

// const imageAvatar = document.querySelector('.profile__avatar-image');
// const buttonsClosePopup = document.querySelectorAll('.popup__close-btn');
// const btnAddCard = document.querySelector('.profile__btn_type_add');
// const btnEditProfile = document.querySelector('.profile__btn_type_edit');
// const addCardPopup = document.getElementById('popup_add');
// const profileAvatarPopup = document.getElementById('avatar');
// const buttonSumbit = document.getElementById('submitCard');

// const nameInput = document.querySelector('.popup__input[name="name"]');
// const jobInput = document.querySelector('.popup__input[name="job"]');
const avatarInput = document.querySelector('.popup__input[name="avatar"]');
const btnProfileAvatarPopup = document.querySelector('.profile__avatar');
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

const api = new Api(configApi);

const profile = new UserInfo(
  nameProfile,
  aboutProfile,
  avatarProfile
)

Promise.all([
  api.getUser(),
  api.getCards()])
  .then(([user, cards]) => {
    profile.setUserInfo(user);
    idProfile.id = user._id;
    const defaultCardList = new Section(
      {
        items: cards,
        render: (item) => {
          const card = new Card(item, idProfile, cardTemplateSelector);
          const cardElement = card.generate();
          defaultCardList.setItem(cardElement);
        }
      }, selectorPublications);

    defaultCardList.renderItems();

  })
  .catch((err) => {
    console.error(err);
  })



const popupWithImage = new PopupWithImage(popupWithImageSelector)

const createCard = (dataCard) => {
  const card = new Card(dataCard, idProfile, cardTemplateSelector, {
    handleCardClick: (dataImage) => popupWithImage.open(dataImage),
    deleteCardServer: deleteCardServer(card),
    addLike: addLikeServer(card),
    removeLike: removeLikeServer(card)
  })
  return card
}


const deleteCardServer = (card) => {
  api.deleteCard(card.getIdCard())
    .then(() => card.deleteCard())
    .catch(err => console.log(err))
};


const addLikeServer = (card) => {
  api.likeCards(card.getIdCard())
    .then((res) => { card.indicateLike(res) }) // функция обработки лайка
    .catch(err => console.log(err))

}

const removeLikeServer = (card) => {
  api.deleteLikeCards(card.getIdCard())
    .then((res) => { card.indicateLike(res) }) // функция обработки лайка
    .catch(err => console.log(err))
}
// const fillInIdProfile = (id) => idProfile._id = id;


// function initiateProfile() {   // : загрузка данных профиля
//   getDataProfile()
//     .then((res) => {
//       fillInIdProfile(res._id);
//       fillInDataProfile(res);
//       return idProfile._id !== undefined;
//     })
//   }
/*
api.getCards(cards)
  .then((cards) => {
    const defaultCardList = new Section({
      items: cards,
      render: (item) => {
        const card = new Card(item, '.cards');
          const cardElement = card.generate();
          defaultCardList.setItem(cardElement);
       }
    },cardSelector);
    defaultCardList.renderItems();

  })
  .catch((err) => {
    console.error(err);
  })
/*

/**------------------------- */

/*




Promise.all([
  getUser(),
  getCards()])
.then(([user, card])=>{
  nameProfile.textContent = user.name;
  aboutProfile.textContent = user.about;
  imageAvatar.src = user.avatar;
  nameProfile.dataset.edited = true;
  nameProfile.dataset.id = user._id;
  card.forEach(newCard => {
    publications.append(createCard(newCard));
   })
})
.catch((err) => {
  console.error(err);
})


buttonsClosePopup.forEach(button => {
  button.addEventListener('click', function (evt) {
    popupClose(evt.currentTarget.closest('.popup'));
  })
});

btnAddCard.addEventListener('click', function (evt) {
  resetError(formCards, config)
  popupOpen(addCardPopup);
});

btnEditProfile.addEventListener('click', function (evt) {
  resetError(formProfile, config)
  popupOpen(popupProfile);
  getUserInfo(nameProfile, aboutProfile);
});

btnProfileAvatarPopup.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupOpen(profileAvatarPopup);
});

function getUserInfo (nameProfileValue, aboutProfileValue ){
  nameInput.value = nameProfileValue.textContent;;
  jobInput.value = aboutProfileValue.textContent;;
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  renderLoading(true);
  patchUser({name: nameInput.value, about: jobInput.value})
  .then((dataUpdateUser) => {
    nameProfile.textContent = dataUpdateUser.name;
    aboutProfile.textContent = dataUpdateUser.about;
  })
  .then(() => {
    formProfile.reset();
    popupClose(popupProfile);
  })
  .finally(() => {
    renderLoading(false);
  })
  .catch((err) => {
    console.error(err);
  })
}


formProfile.addEventListener('submit', handleFormSubmitProfile);

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  renderLoading(true);
  postCard({name: nameInputCard.value, link: imageInputCard.value})
  .then((card)=>{
    card.name = card.name;
    card.link = card.link;
    publications.prepend(createCard(card));
  })
  .then(() => {
    formCards.reset();
    popupClose(addCardPopup);
  })
  .finally(() => {
    renderLoading(false);
  })
  .catch((err) => {
    console.error(err);
  })
}

formCards.addEventListener('submit', handleFormSubmitAddCard);

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true);
  avatarProfile({avatar: avatarInput.value})
  .then((dataUpdateAvatar)=>{
    imageAvatar.src = dataUpdateAvatar.avatar
  })
  .then(() => {
    formAvatar.reset();
    popupClose(profileAvatarPopup);
  })
  .finally(() => {
    renderLoading(false);
  })
  .catch((err) => {
    console.error(err);
  })
}

formAvatar.addEventListener('submit', handleFormSubmitAvatar);
const loader = document.querySelectorAll('.loader')
const content = document.querySelectorAll('.content');
function renderLoading(isLoading){
  if(isLoading ){
    content.forEach((content) => {
      content.classList.add('loader_hidden');
    })
    loader.forEach((loader) => {
      loader.classList.add('loader_visible');

    })

  } else {
    content.forEach((content) => {
      content.classList.remove('loader_hidden');
    })
    loader.forEach((loader) => {
      loader.classList.remove('loader_visible');

    })
  }
}
enableValidation(config);

*/
