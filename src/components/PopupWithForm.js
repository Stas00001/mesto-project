import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ callback }, popupSelector) {
    super(popupSelector);
    this._handleSubmitPopupEditProfile = callback;
    this._popupForm = this._popup.querySelector('.form');
    this._popupInputs = this._popupForm.querySelectorAll('.popup__input');
    this._saveButton = this._popupForm.querySelector('.popup__save-btn');

    this._handleClickSaveButton = this._handleClickSaveButton.bind(this);

    this._dataInputs = {};
  }

  _getInputValues() {
    this._popupInputs.forEach(input => this._dataInputs[input.name] = input.value)
    return this._dataInputs
  }

  _handleClickSaveButton(evt) {
    evt.preventDefault();
    this._handleSubmitPopupEditProfile(this._getInputValues())

  }

  _setListeners() {
    super._setListeners();
    this._popupForm.addEventListener('submit', this._handleClickSaveButton);
  }

  _removeListeners() {
    super._removeListeners();
    this._popupForm.removeEventListener('submit', this._handleClickSaveButton);
  }


  setTextSaveButton(status) {
    status
      ? this._saveButton.textContent = 'Сохраняю...'
      : this._saveButton.textContent = 'Сохранить'
  }

}
