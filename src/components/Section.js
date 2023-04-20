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


const sectionPublicationSelector = '.publications'

