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

getCards()
.then((data)=>{
  data.forEach(newCard => {
   publications.append(createCard(newCard));
  }); 
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
getUser()
.then((data) => {
  nameProfile.textContent = data.name;
  aboutProfile.textContent = data.about;
  imageAvatar.src = data.avatar;
});
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  renderLoading(true);
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = jobInput.value;
  patchUser(nameProfile, aboutProfile)
  .finally(() => {
    renderLoading(false);
    popupClose(popupProfile);
  });
}


formProfile.addEventListener('submit', handleFormSubmitProfile);

function handleFormSubmitAddCard(evt) {
  evt.preventDefault();
  renderLoading(true);
  const newCard = {};
  newCard.name = nameInputCard.value;
  newCard.link = imageInputCard.value;
  postCard(newCard.name, newCard.link)
  .then((newCard)=>{
    publications.prepend(createCard(newCard));
  })
  .finally(() => {
    renderLoading(false);
    popupClose(addCardPopup);
  });
 
}

formCards.addEventListener('submit', handleFormSubmitAddCard);

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true);
  const linkAvatar = avatarInput.value;
  imageAvatar.src = linkAvatar;
  avatarProfile(linkAvatar)
  .finally(() => {
    renderLoading(false);
    popupClose(profileAvatarPopup);
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

