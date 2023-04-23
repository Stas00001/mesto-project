export default class Card {
  constructor(data, idProfile, selector,
    {
      handleCardClick,
      deleteCardServer,
      addLike,
      removeLike
    }
  ) {
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._idCard = data._id;
    this._selector = selector;
    this._idUser = idProfile.id;
    // функционал карточки
    this._addLike = addLike; // функция лайка
    this._removeLike = removeLike;
    this._deleteCard = deleteCardServer; // функция удалени
    this._openPopupImage = handleCardClick; // функция открытия попапа с изображением

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

    this._checkButtonHeart(this._data) && this._likeButton.classList.add('publications__btnlike_active')
    this._numderLikes.textContent = this._countLikes(this._data)

    this._data.owner._id === this._idUser
      && this._element
        .querySelector('.publications__btndelete')
        .classList.remove('publications__btndelete_inactive');

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.publications__btnlike').addEventListener('click', () => this._handleLikeCard());
    this._element.querySelector('.publications__btndelete').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.publications__image').addEventListener('click', () => this._openPopupImage({ name: this._name, link: this._image }));
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  getIdCard() {
    return this._idCard;
  }

  _handleLikeCard() {
    this._likeButton.classList.contains('publications__btnlike_active')
      ? this._removeLike()
      : this._addLike()
  }

  _checkButtonHeart(card) { // : проверка собственника
    return card.likes.find(like => like._id === this._idUser)
  }

  _countLikes(data) {  // : заполнение количества лайков
    return data.likes.length === 0
      ? ''
      : data.likes.length
  }

  indicateLike(card) {         // : отображение лайка на странице
    this._numderLikes.textContent = this._countLikes(card);
    this._checkButtonHeart(card)
      ? this._likeButton.classList.add('publications__btnlike_active')
      : this._likeButton.classList.remove('publications__btnlike_active')
  }

};
