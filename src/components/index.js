export {nameProfile, aboutProfile};
import { popupClose, popupOpen, formProfile, popupProfile, formAvatar } from "./modal.js";
import { formCards, nameInputCard, imageInputCard, publications, createCard } from "./card.js";
import { enableValidation, config} from "./validate.js";
import { getUser, getCards, patchUser, postCard, avatarProfile } from "./api.js";
import '../pages/index.css';
const imageAvatar = document.querySelector('.profile__avatar-image');
const buttonsClosePopup = document.querySelectorAll('.popup__close-btn');
const btnAddCard = document.querySelector('.profile__btn_type_add');
const btnEditProfile = document.querySelector('.profile__btn_type_edit');
const addCardPopup = document.getElementById('popup_add');
const profileAvatarPopup = document.getElementById('avatar');
const buttonSumbit = document.getElementById('submitCard');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="job"]');
const avatarInput = document.querySelector('.popup__input[name="avatar"]');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const btnProfileAvatarPopup = document.querySelector('.profile__avatar');

Promise.all([
  getUser(), 
  getCards()])
.then(([user, card])=>{
  nameProfile.textContent = user.name;
  aboutProfile.textContent = user.about;
  imageAvatar.src = user.avatar;
  card.forEach(newCard => {
    publications.append(createCard(newCard));
   }); 
 
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
  popupOpen(addCardPopup);
});

btnEditProfile.addEventListener('click', function (evt) {
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
  const newCard = {};
  postCard({name: nameInputCard.value, link: imageInputCard.value})
  .then((card)=>{
    newCard.name = card.name;
    newCard.link = card.link;
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

