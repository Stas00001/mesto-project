//export {configApi, getRespome, getUser, getCards, patchUser, postCard, deleteCard, likeCards, deleteLikeCards, avatarProfile};

export default class Api {
  constructor(data) {
    this._baseUrl = data.baseUrl
    this._headers = data.headers
  }

  getRespome(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this.getRespome)
  };

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this.getRespome);
  }

  patchUser(body) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
      .then(this.getRespome)
  }
  postCard(body) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body)
    })
      .then(this.getRespome);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.getRespome);
  }

  likeCards(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this.getRespome);
  }

  deleteLikeCards(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this.getRespome);
  }

  avatarProfile(body) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
      .then(this.getRespome);
  }
}




