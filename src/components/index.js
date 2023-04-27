import '../pages/index.css';
import Api from "./Api.js";
import Section from './Section.js'
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import FormValidator from './FormValidator';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';

import {
  configApi,
  configValidator,
  selectorPublications,
  nameProfile,
  aboutProfile,
  avatarProfile,
  nameEditForm,
  aboutEditForm,
  idProfile,
  // : массив форм
  formsList,
  // : селекторы
  cardTemplateSelector,
  popupWithImageSelector,
  popupEditProfileSelector,
  popupEditAvatarSelector,
  popupAddCardSelector,

  // : кнопки
  buttonEditProfile,
  buttonEditAvatar,
  buttonAddCard
} from "../utils/constanst.js";




const api = new Api(configApi);

const profile = new UserInfo(
  nameProfile,
  aboutProfile,
  avatarProfile
)

Promise.all([
  api.getUser(),
    api.getCards()
])
  .then(([user, cards]) => {
    profile.setUserInfo(user);
    idProfile.id = user._id;
    cardsSection.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });



const cardsSection = new Section(
  {
    render: (item) => {
      const card = createCard(item, idProfile);
      const cardElement = card.generate();
      return cardElement
    }
  },
  selectorPublications);


const createCard = (dataCard, idProfile) => {
  const card = new Card(dataCard, idProfile, cardTemplateSelector,
    {
      handleCardClick: (dataImage) => popupWithImage.open(dataImage),
      addLike: () => {
        api.likeCards(card.getIdCard())
          .then((res) => {
            card.indicateLike(res)
          })
          .catch(err => console.log(err))
      },
      removeLike: () => {
        api.deleteLikeCards(card.getIdCard())
          .then((res) => { card.indicateLike(res) })
          .catch(err => console.log(err))
      },
      deleteCardServer: () => {
        api.deleteCard(card.getIdCard())
          .then(() => card.deleteCard())
          .catch(err => console.log(err))
      }
    }
  )
  return card
};

// : попап с изображением
const popupWithImage = new PopupWithImage(popupWithImageSelector);

// : функционал редактирования профиля
const popupEditProfile = new PopupWithForm(
  {
    callback: (data) => {
      popupEditProfile.setTextSaveButton(true)
      api
        .patchUser({ name: data.name, about: data.about })
        .then((res) => profile.setUserInfo(res))
        .catch(err => console.log(err))
        .finally(() => {
          popupEditProfile.setTextSaveButton(false)
        })
      popupEditProfile.close()
    }
  },
  popupEditProfileSelector
);

const fillInProfileForm = () => {
  const dataProfile = profile.getUserInfo()
  nameEditForm.value = dataProfile.name
  aboutEditForm.value = dataProfile.about
}

// : функционал редактирования аватара
const popupEditAvatar = new PopupWithForm(
  {
    callback: (data) => {
      popupEditProfile.setTextSaveButton(true)
      api
        .avatarProfile(data)
        .then((res) => { profile.setUserInfo(res) })
        .catch(err => console.log(err))
        .finally(() => {
          popupEditProfile.setTextSaveButton(false)
        })
      popupEditAvatar.close()
    }
  },
  popupEditAvatarSelector
);

// : функционал добавления карточки
const popupAddCard = new PopupWithForm({
  callback: (data) => {
    popupEditProfile.setTextSaveButton(true)
    api
      .postCard(data)
      .then((res) => {
        cardsSection.setItem(res);
        popupAddCard.close();
      })
      .catch()
      .finally(() => popupEditProfile.setTextSaveButton(false))
  }
},
  popupAddCardSelector
)

// : валидация полей ввода
const initiateValidation = (element) => {
  const formValidator = new FormValidator(configValidator, element)
  formValidator.enableValidation()
};

formsList.forEach(element => initiateValidation(element));


// : Слушатели на кнопки
buttonEditProfile.addEventListener('click', () => {  // редактирование профиля
  // : подготовка формы
  fillInProfileForm(),
    popupEditProfile.open()
});

buttonEditAvatar.addEventListener('click', () => { // редактирование аватара
  popupEditAvatar.open()
});

buttonAddCard.addEventListener('click', () => {
  popupAddCard.open()
});

