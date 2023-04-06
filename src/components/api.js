export {configApi, getRespome, getUser, getCards, patchUser, postCard, deleteCard, likeCards, deleteLikeCards, avatarProfile};

const configApi = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
    headers: {
      authorization: 'a06d07f4-0395-4028-bda1-ecc0fed6969d',
      'Content-Type': 'application/json',
    }
  }
  
  const getRespome = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
  
  const getUser = () => {
    return fetch(`${configApi.baseUrl}/users/me`, {
      headers: configApi.headers,
    })
    .then(getRespome)
  }
  
  const getCards = () => {
    return fetch(`${configApi.baseUrl}/cards`,{
        headers: configApi.headers,
    })
    .then(getRespome)
  }

  const patchUser = (name, about) => {
    return fetch(`${configApi.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: configApi.headers,
    body: JSON.stringify({
        name: name.textContent,
        about: about.textContent,
        })
    });
  }

  const postCard = (nameCard, linkCard) => {
    return fetch(`${configApi.baseUrl}/cards`, {
        method: 'POST',
        headers: configApi.headers,
        body: JSON.stringify({
            name: nameCard,
            link: linkCard,
        })
    })
    .then(getRespome);
  }

  const deleteCard = (cardId) => {
    return fetch(`${configApi.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers
    })
    .then(getRespome);
  }

  const likeCards = (cardId) => {
    return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: configApi.headers,
    })
    .then(getRespome);
  }
  const deleteLikeCards = (cardId) => {
    return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers,
    })
    .then(getRespome);
  }

  const avatarProfile = (linkAvatar) => {
    return fetch(`${configApi.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: configApi.headers,
        body: JSON.stringify({
            avatar: linkAvatar
        })
    })
    .then(getRespome);
  }