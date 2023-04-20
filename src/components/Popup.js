export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        // установка слушателя Esc 

    }

    close() {
        this._popup.classList.romeve('popup_opened');

    }
    setEventListeners() {
        
    }
    _handleEscClose() {
        if (evt.key === 'Escape') {
            const popupActive = document.querySelector('.popup.popup_opened');
            evt.preventDefault();
            this.close();
          }
    }
}




const setListenerOnEscape = () => document.addEventListener('keydown', closeOpenedPopupByEsc);
const removeListenerOnEscape = () => document.removeEventListener('keydown', closeOpenedPopupByEsc);

 class editPopup  extend Popup{

}