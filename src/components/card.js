import {popupOpen, popupCardImage, popupText, popupImage } from "./modal.js";
import { deleteCard, deleteLikeCards, getUser, likeCards } from "./api.js";
export {formCards, nameInputCard, imageInputCard, publications, createCard};
const formCards = document.querySelector('.popup__form[name="cards"]');
const nameInputCard = formCards.querySelector('.popup__input[name="nameCards"]');
const imageInputCard = formCards.querySelector('.popup__input[name="imageCards"]');
const publications = document.querySelector('.publications');
function createCard(newCard) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.publications__card').cloneNode(true);
  const titleCard = card.querySelector('.publications__title');
  const imageCard = card.querySelector('.publications__image');
  const btnLike = card.querySelector('.publications__btnlike');
  let like;
  let userCardId;
  let cardId;
  let likeCard ; 
  const likeNum = card.querySelector('.publications__like');
  titleCard.textContent = newCard.name;
  imageCard.src = newCard.link;
  imageCard.alt = newCard.name;
  like = newCard.likes.length;
  let likeArray = newCard.likes;
  cardId = newCard._id;
  userCardId = newCard.owner._id;
  let result = likeArray.map(user => user._id);
  card.querySelector('#like').innerHTML = like;
  if (like >0){
    likeNum.classList.add('publications__like_active');
  }

  getUser()
  .then((user) => {
    if(result.includes(user._id)){
      btnLike.classList.add('publications__btnlike_active');

    }
    })
  card.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('publications__btnlike')){
        if (evt.target.classList.contains('publications__btnlike_active')){
          likeCard = false;
          like = likeCard ? ++like: --like;
          likeCard = !likeCard;
          evt.target.classList.toggle('publications__btnlike_active');
          deleteLikeCards(cardId);
          card.querySelector('#like').innerHTML = like;

        } else  {
          likeCard = true;
          like = likeCard ? ++like : --like;
          likeCard = !likeCard;
          evt.target.classList.toggle('publications__btnlike_active');
          likeCards(cardId);
          card.querySelector('#like').innerHTML = like;
        }
    if (like ===0 && evt.target.classList.contains('publications__btnlike')) {
      likeNum.classList.toggle('publications__like_active');
    }
    }
  });

 
  card.querySelector('.popup-open').addEventListener('click', function (evt) {
    evt.preventDefault();
    popupCardImage.src = newCard.link;
    popupText.textContent = newCard.name;
    popupCardImage.alt = newCard.name;
    popupOpen(popupImage);
  });
  cardDelete(card, userCardId, cardId);
  return card;
}
function cardDelete(card, userCardId, cardId) {
  const buttonsDeleteCard = card.querySelector('.publications__btndelete');
  getUser()
  .then((user) => {
    if (userCardId === user._id) {
      buttonsDeleteCard.classList.remove('publications__btndelete_inactive');
      buttonsDeleteCard.addEventListener('click', function (evt) {
      card.remove(card);
      deleteCard(cardId);
      });
    }
  })
}
