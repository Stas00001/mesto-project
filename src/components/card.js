import {popupOpen, popupCardImage, popupText, popupImage } from "./modal.js";
import { deleteCard, deleteLikeCards, getCards, getUser, likeCards } from "./api.js";
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
  const likeArray = newCard.likes;
  cardId = newCard._id;
  userCardId = newCard.owner._id;
  let result = likeArray.map(user => user._id);
  card.querySelector('#like').innerHTML = like;
  if (like >0){
    likeNum.classList.add('publications__like_active');
  }
  btnLike.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('publications__btnlike_active')){
            deleteLikeCards(cardId)
            .then(() => {
              likeCard = false;
              like = likeCard ? ++like: --like;
              evt.target.classList.toggle('publications__btnlike_active');
              card.querySelector('#like').innerHTML = like;
            })
            .catch((err) => {
              console.error(err);
            })
        } else  {         
            likeCards(cardId)
            .then(() => {
              likeCard = true;
              like = likeCard ? ++like : --like;
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
  getUser()
  .then((user) => {
    if(result.includes(user._id)){
      btnLike.classList.add('publications__btnlike_active');
    }
    cardDelete(card, userCardId, cardId, user._id);
    })
  .catch((err) => {
    console.error(err);
  })
  return card;
}

function cardDelete(card, userCardId, cardId, user) {
  const buttonsDeleteCard = card.querySelector('.publications__btndelete');
      if(userCardId === user){
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
