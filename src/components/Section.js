export default class Section {
    constructor({items, render}, selectorContainer) {
        this._renderedItems = items;
        this._renderer = render;
        this._container = document.querySelector(selectorContainer);
    }

    setItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
          });
    }
}

// это объявление нового класса-контейнера для карточек
// потом в index перенести
const publications = new Section({
    render : element => {
        // пока старая функция создания карточки
      const card =   createCard(element)
      return card
    }
},sectionPublicationSelector)

// это потом в константы
const sectionPublicationSelector = '.publications'