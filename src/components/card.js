import {popupOpen, popupCardImage, popupText, popupImage } from "./modal.js";
import { deleteCard, deleteLikeCards, likeCards } from "./api.js";
import { nameProfile, aboutProfile } from "./utils.js";
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
