export default class UserInfo {
    constructor(name, about, avatar) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
    
    }
    
    getUserInfo(){
        return {name : this._name, about : this._about}
    }

    setUserInfo(user){
        this._name.textContent = user.name;
        this._about.textContent = user.about;
        this._avatar.alt = user.name;
        this._avatar.src = user.avatar;
    }
}

// const selector = '.profile__name'
// const selector2 = '.profile__about'
// const selector3 = '.profile__avatar'



//api.getUser => setUserInfo(user)
// получаем ответ от сервера
// для ответа запускаем ф setUserInfo