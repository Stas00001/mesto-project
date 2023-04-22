// import {popupOpen, popupCardImage, popupText, popupImage } from "./modal.js";
// import { deleteCard, deleteLikeCards, likeCards } from "./Api.js";
// import { nameProfile, aboutProfile } from "./utils.js";
// //export {formCards, nameInputCard, imageInputCard, publications, createCard};
// const formCards = document.querySelector('.popup__form[name="cards"]');
// const nameInputCard = formCards.querySelector('.popup__input[name="nameCards"]');
// const imageInputCard = formCards.querySelector('.popup__input[name="imageCards"]');
// const publications = document.querySelector('.publications');

export default class Card {
  constructor(data, idProfile, selector, 
    {
      //  handleCardClick, deleteCardServer, 
      addLike, removeLike
     }
    ) {
     this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._idCard = data._id;
    this._idUser = data.owner._id;
    this._likesLength = data.likes.length;
    this._likes = data.likes;
    this._selector = selector;
    this._idUser = idProfile.id;
    this._usersLike = this._likes.map(users => users._id);
    // функционал карточки
    this._addLike = addLike; // функция лайка
    this._removeLike = removeLike;
    // this._deleteCard = deleteCardServer; // функция удалени
    // this._openPopupImage = handleCardClick; // функция открытия попапа с изображением

  }

  _getElement() {

    const cardElement = document.querySelector(this._selector)
      .content
      .querySelector('.publications__card')
      .cloneNode(true);
    return cardElement;
  }

  generate() {
    this._element = this._getElement();
    this._element.querySelector('.publications__image').src = this._image;
    this._element.querySelector('.publications__title').textContent = this._name;
    this._element.querySelector('.publications__image').alt = this._name;

    this._likeButton = this._element.querySelector('.publications__btnlike')
    this._numderLikes = this._element.querySelector('.publications__like')


    this._checkButtonHeart();
    this._numderLikes.textContent = this._countLikes(this._data)

    this._setEventListeners();

    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.publications__btnlike').addEventListener('click', () => this._handleLikeCard());
    // this._element.querySelector('.publications__btndelete').addEventListener('click', () => this._deleteCard);
   // this._element.querySelector('.popup_image').addEventListener('click', () => this._openPopupImage({ name: this._name, link: this._image }));
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  getIdCard() {
    console.log('id - ',this._idCard)
    return this._idCard;
  }

  _handleLikeCard() {
    if (this._likeButton.classList.contains('publications__btnlike_active')) {
      console.log(1)
      this._likeButton.classList.remove('publications__btnlike_active');

      this._removeLike()

    } else {
      console.log(2)
      this._likeButton.classList.add('publications__btnlike_active');

      this._addLike()
    }
  }

  _checkButtonHeart() { // : проверка собственника
    if(this._usersLike.includes(this._idUser)){
      this._likeButton.classList.add('publications__btnlike_active')
    }
    } 
   // console.log(card.likes)
   // const a = card.likes
   // a.find(like => like._id === this._idUser)
  

  _countLikes(data) {  // : заполнение количества лайков
    return data.likes.length === 0
      ? ''
      : data.likes.length
  }

  indicateLike(card) {         // : отображение лайка на странице
   const btn = this._element.querySelector('.publications__btnlike');
   const _like = this._element.querySelector('.publications__like');
   _like.textContent = this._countLikes(card);
    console.log(this._likeButton);
  //  this._handleLikeCard();
    //  ? btn.classList.add('publications__btnlike_active')
    //  : btn.classList.remove('publications__btnlike_active')
  }


}


 /*
function createCard(newCard) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  const titleCard = card.querySelector('.publications__title');
  const imageCard = card.querySelector('.publications__image');
  const btnLike = card.querySelector('.publications__btnlike');
  let like;
  const likeNum = card.querySelector('.publications__like');
  titleCard.textContent = newCard.name;
  imageCard.src = newCard.link;
  imageCard.alt = newCard.name;
  like = newCard.likes.length;
  const cardId = newCard._id;
  const userCardId = newCard.owner._id;
  const likeArray = newCard.likes;
  const usersLike = likeArray.map(users => users._id);
  card.querySelector('#like').innerHTML = like;
  if (like >=0){
    likeNum.classList.toggle('publications__like_active');
  }
  btnLike.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('publications__btnlike_active')){
            deleteLikeCards(cardId)
            .then(() => {
              like = --like;
              evt.target.classList.toggle('publications__btnlike_active');
              card.querySelector('#like').innerHTML = like;
            })
            .catch((err) => {
              console.error(err);
            })
        } else  {         
            likeCards(cardId)
            .then(() => {
              like =++like;
              evt.target.classList.toggle('publications__btnlike_active');
              card.querySelector('#like').innerHTML = like;
            })  
            .catch((err) => {
              console.error(err);
            })
        }
  });

  card.querySelector('.popup-open').addEventListener('click', function (evt) {
    evt.preventDefault();
    popupCardImage.src = newCard.link;
    popupText.textContent = newCard.name;
    popupCardImage.alt = newCard.name;
    popupOpen(popupImage);
  });
 const nameProfileTextElement = document.querySelector('.profile__name[data-edited="true"]');
 const userId = nameProfileTextElement.dataset.id;
  if(usersLike.includes(userId)){
    btnLike.classList.add('publications__btnlike_active');
 }
  cardDelete(card, userCardId, cardId, userId);
  
  return card;
}


function cardDelete(card, userCardId, cardId, userId) {
  const buttonsDeleteCard = card.querySelector('.publications__btndelete');
      if(userCardId === userId){
      buttonsDeleteCard.classList.remove('publications__btndelete_inactive');
      buttonsDeleteCard.addEventListener('click', function (evt) {
        deleteCard(cardId)
        .then(() => {
          card.remove(card);
        })
        .catch((err) => {
          console.error(err);
        })
      });
      }
}
*/