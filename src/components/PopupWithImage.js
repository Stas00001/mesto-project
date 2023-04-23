import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__images');
    this._capture = this._popup.querySelector('.popup__text');
  }

  open(dataImage) { // передать сюда переменную с данными при клике по картинке
    this._image.src = dataImage.link;
    this._capture.textContent = dataImage.name;
    super.open();
  }
}
