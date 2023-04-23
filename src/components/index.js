import '../pages/index.css';
import Api from "./Api.js";
import Section from './Section.js'
import Card from './Card.js';
import PopupWithForm from './PopupWithForm';

import {
  configApi,
  selectorPublications,
  nameProfile,
  aboutProfile,
  avatarProfile,
  nameEditForm,
  aboutEditForm,
  idProfile,
  cardTemplateSelector,
  popupWithImageSelector,
  popupEditProfileSelector,
  popupEditAvatarSelector,
  popupAddCardSelector,

  // : кнопки
  buttonEditProfile,
  buttonEditAvatar,
  buttonAddCard
} from "./constanst.js";

import SubmitForm from './SubmitForm';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';


const api = new Api(configApi);

const profile = new UserInfo(
  nameProfile,
  aboutProfile,
  avatarProfile
)

Promise.all([
  api.getUser()
])
  .then(([user, cards]) => {
    profile.setUserInfo(user);
    idProfile.id = user._id;
    return idProfile.id !== undefined

  })
  .then((res) => {
    !res
      ? console.log(`ERROR: ID Profile - ${idProfile._id}.`)
      : api.getCards()
        .then((res) => { cardsSection.renderItems(res) })
        .catch()

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
  }, selectorPublications);








const popupWithImage = new PopupWithImage(popupWithImageSelector)




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
  const dataProfile = profile.getUserInfo();
  nameEditForm.value = dataProfile.name;
  aboutEditForm.value = dataProfile.about;
};



// : функционал редактирования автврв
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
)



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

buttonAddCard.addEventListener('click', () => {
  console.log(1);
  popupAddCard.open()
})




// : Слушатели на кнопки

buttonEditProfile.addEventListener('click', () => {  // редактирование профиля
  // : подготовка формы
  fillInProfileForm(),
    popupEditProfile.open()
})

buttonEditAvatar.addEventListener('click', () => { // редактирование аватара
  popupEditAvatar.open()
});

// const addLikeServer = (card) => {

// }

// const removeLikeServer = (card) => {
//   api.deleteLikeCards(card.getIdCard())
//     .then((res) => { card.indicateLike(res) }) // функция обработки лайка
//     .catch(err => console.log(err))
// }


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
    const cardsSection = new Section({
      items: cards,
      render: (item) => {
        const card = new Card(item, '.cards');
          const cardElement = card.generate();
          cardsSection.setItem(cardElement);
       }
    },cardSelector);
    cardsSection.renderItems();

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
