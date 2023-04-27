export default class Section {
  constructor({ render }, selectorContainer) {
    this._renderer = render;
    this._container = document.querySelector(selectorContainer);
  }

  setItem(element) {
    this._container.prepend(this._renderer(element));
  }

  renderItems(cards) {
    cards.forEach(item => {
      this.setItem(item);
    });
  }
}



