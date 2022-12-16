const profile = document.querySelector('.profile');
const profileBtn = document.querySelector('.profile__btn');
const openPopupBtn = document.querySelectorAll('.popup-open');
const popupBtnClose = document.querySelectorAll('.popup__close-btn');
const btnSave = document.querySelector('.popup__save-btn');
const popup = document.querySelector('.popup');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
openPopupBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup_opened');
    })
});

popupBtnClose.forEach((button) => {
  button.addEventListener('click', (e) =>{
    e.preventDefault();
    popup.classList.remove('popup_opened');
  })
});



// Находим форму в DOM
const formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input[name="name"]');
console.log(nameInput.value);// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input[name="job"]');// Воспользуйтесь инструментом .querySelector()
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
nameInput.value = nameProfile.textContent;
jobInput.value = aboutProfile.textContent;
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value

 const nameInputValue  = nameInput.value;
 const jobInputValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    nameProfile.textContent = nameInputValue;
    aboutProfile.textContent = jobInputValue;
    popup.classList.remove('popup_opened');

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);






/*if(popupLinks.length > 0) {
  for (let index=0; index<popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click' function (e) {
      const popupName = popopLink.getAttribute('href').replace('#',' ');
      const currentPopup.document.getAttributeId(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive
  }
  currentPopup.classListAdd('.popup_opened');

}
*/
