export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;

  }

  getUserInfo() {
    return { name: this._name.textContent, about: this._about.textContent }
  }

  setUserInfo(user) {
    this._name.textContent = user.name;
    this._about.textContent = user.about;
    this._avatar.alt = user.name;
    this._avatar.src = user.avatar;
  }
}
