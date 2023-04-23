export default class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    },
    popup) {
    this._popup = popup;

    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;

    this._inputsList = [...this._popup.querySelectorAll(this._inputSelector)];
    this._saveButtonForm = this._popup.querySelector(this._submitButtonSelector);

  }

  enableValidation() {
    this._popup.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners(this._popup);
  }

  _setEventListeners() {

    this._popup.addEventListener('reset', () => {
      this._saveButtonForm.classList.add(this._inactiveButtonClass)
      this._saveButtonForm.disabled = true
      this._inputsList.forEach(inputElement => {
        this._hideInputError(inputElement)
      })
    })

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputsList)) {
      this._saveButtonForm.disabled = true;
      this._saveButtonForm.classList.add(this._inactiveButtonClass);
    } else {
      this._saveButtonForm.disabled = false;
      this._saveButtonForm.classList.remove(this._inactiveButtonClass);
    }
  }

  _hasInvalidInput = () => {
    return this._inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._popup.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }


  _hideInputError(inputElement) {
    const errorElement = this._popup.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

};
