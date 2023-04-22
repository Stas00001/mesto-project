import { document } from "./constanst";
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-btn')
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._setListenerOnEscape()

  }

  close() {
    this._popup.classList.romeve('popup_opened');
    this._removeListenerOnEscape

  }

  _handleEscClose() {
    if (evt.key === 'Escape') {
      // const popupActive = document.querySelector('.popup.popup_opened');
      evt.preventDefault();
      this.close();
    }
  }

  _setListenerOnEscape() {
    document.addEventListener('keydown', this._handleEscClose);
    this._closeButton.addEventListener('click', this.close);
  }

  _removeListenerOnEscape() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._closeButton.removeEventListener('click', this.close);
  }
}






const setListenerOnEscape = () => document.addEventListener('keydown', closeOpenedPopupByEsc);
const removeListenerOnEscape = () => document.removeEventListener('keydown', closeOpenedPopupByEsc);

class editPopup extends Popup {

}
