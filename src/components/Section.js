export default class Section {
  constructor({ render }, selectorContainer) {
    this._renderer = render;
    this._container = document.querySelector(selectorContainer);
  }

  setItem(element) {
    this._container.prepend(this._renderer(element));
  }

  setItemDefault(element) {
    this._container.append(this._renderer(element));

  }

  renderItems(cards) {
    cards.reduceRight((_, item) => {
      this.setItem(item)
    }, null)
  }
  
  renderItemsDefault(cards) {
    cards.forEach(item => {
      this.setItemDefault(item);
    });
  }
}



