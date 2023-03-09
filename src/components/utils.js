import { popupClose, popupProfile } from "./modal.js";
export {handleFormSubmit};
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="job"]');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
nameInput.value = nameProfile.textContent;
jobInput.value = aboutProfile.textContent;
function handleFormSubmit(evt) {

    evt.preventDefault();
    const nameInputValue  = nameInput.value;
    const jobInputValue = jobInput.value;

    nameProfile.textContent = nameInputValue;
    aboutProfile.textContent = jobInputValue;
    popupClose(popupProfile);
}