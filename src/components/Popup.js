export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-btn')

    this._handleEscButton = this._handleEscButton.bind(this);
    this._handleCloseButton = this._handleCloseButton.bind(this);
    this._handleClickOverley = this._handleClickOverley.bind(this);
  }

  open() {
    this._setListeners();
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._removeListeners();
  }

  _handleEscButton(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleCloseButton() {
    this.close();
  }

  _handleClickOverley(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _setListeners() {
    document.addEventListener('keydown', this._handleEscButton);
    this._closeButton.addEventListener('click', this._handleCloseButton);
    this._popup.addEventListener('click', this._handleClickOverley);
  }

  _removeListeners() {
    document.removeEventListener('keydown', this._handleEscButton);
    this._closeButton.removeEventListener('click', this._handleCloseButton);
    this._popup.removeEventListener('click', this._handleClickOverley);

  }
}



