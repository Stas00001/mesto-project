(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"getRespome",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this.getRespome)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this.getRespome)}},{key:"patchUser",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this.getRespome)}},{key:"postCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this.getRespome)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this.getRespome)}},{key:"likeCards",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then(this.getRespome)}},{key:"deleteLikeCards",value:function(t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then(this.getRespome)}},{key:"avatarProfile",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this.getRespome)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.render;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"setItem",value:function(t){this._container.append(this._renderer(t))}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.setItem(t)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o){var i=o.handleCardClick,u=o.deleteCardServer,a=o.addLike,c=o.removeLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._image=e.link,this._idCard=e._id,this._selector=r,this._idUser=n.id,this._addLike=a,this._removeLike=c,this._deleteCard=u,this._openPopupImage=i}var e,n;return e=t,(n=[{key:"_getElement",value:function(){return document.querySelector(this._selector).content.querySelector(".publications__card").cloneNode(!0)}},{key:"generate",value:function(){return this._element=this._getElement(),this._element.querySelector(".publications__image").src=this._image,this._element.querySelector(".publications__title").textContent=this._name,this._element.querySelector(".publications__image").alt=this._name,this._likeButton=this._element.querySelector(".publications__btnlike"),this._numderLikes=this._element.querySelector(".publications__like"),this._checkButtonHeart(this._data)&&this._likeButton.classList.add("publications__btnlike_active"),this._numderLikes.textContent=this._countLikes(this._data),this._data.owner._id===this._idUser&&this._element.querySelector(".publications__btndelete").classList.remove("publications__btndelete_inactive"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".publications__btnlike").addEventListener("click",(function(){return t._handleLikeCard()})),this._element.querySelector(".publications__btndelete").addEventListener("click",(function(){return t._deleteCard()})),this._element.querySelector(".publications__image").addEventListener("click",(function(){return t._openPopupImage({name:t._name,link:t._image})}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getIdCard",value:function(){return this._idCard}},{key:"_handleLikeCard",value:function(){this._likeButton.classList.contains("publications__btnlike_active")?this._removeLike():this._addLike()}},{key:"_checkButtonHeart",value:function(t){var e=this;return t.likes.find((function(t){return t._id===e._idUser}))}},{key:"_countLikes",value:function(t){return 0===t.likes.length?"":t.likes.length}},{key:"indicateLike",value:function(t){this._numderLikes.textContent=this._countLikes(t),this._checkButtonHeart(t)?this._likeButton.classList.add("publications__btnlike_active"):this._likeButton.classList.remove("publications__btnlike_active")}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(this._popupSelector),this._closeButton=this._popup.querySelector(".popup__close-btn"),this._handleEscButton=this._handleEscButton.bind(this),this._handleCloseButton=this._handleCloseButton.bind(this),this._handleClickOverley=this._handleClickOverley.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._setListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeListeners()}},{key:"_handleEscButton",value:function(t){"Escape"===t.key&&(t.preventDefault(),this.close())}},{key:"_handleCloseButton",value:function(){this.close()}},{key:"_handleClickOverley",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"_setListeners",value:function(){document.addEventListener("keydown",this._handleEscButton),this._closeButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleClickOverley)}},{key:"_removeListeners",value:function(){document.removeEventListener("keydown",this._handleEscButton),this._closeButton.removeEventListener("click",this._handleCloseButton),this._popup.removeEventListener("click",this._handleClickOverley)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(this,t)});function u(t,e){var n,r=t.callback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=r,n._popupForm=n._popup.querySelector(".form"),n._popupInputs=n._popupForm.querySelectorAll(".popup__input"),n._saveButton=n._popupForm.querySelector(".popup__save-btn"),n._handleClickSaveButton=n._handleClickSaveButton.bind(v(n)),n._dataInputs={},n}return e=u,(n=[{key:"close",value:function(){h(m(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._popupInputs.forEach((function(e){return t._dataInputs[e.name]=e.value})),console.log(this._dataInputs),this._dataInputs}},{key:"_handleClickSaveButton",value:function(t){t.preventDefault(),this._handleSubmit(this._getInputValues())}},{key:"_setListeners",value:function(){h(m(u.prototype),"_setListeners",this).call(this),this._popupForm.addEventListener("submit",this._handleClickSaveButton)}},{key:"_removeListeners",value:function(){h(m(u.prototype),"_removeListeners",this).call(this),this._popupForm.removeEventListener("submit",this._handleClickSaveButton)}},{key:"setTextSaveButton",value:function(t){this._saveButton.textContent=t?"Сохраняю...":"Сохранить"}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,k(r.key),r)}}function k(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=function(){function t(e,n){var r,o,i,u=this,a=e.formSelector,c=e.inputSelector,s=e.submitButtonSelector,l=e.inactiveButtonClass,f=e.inputErrorClass,p=e.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(){return u._inputsList.some((function(t){return!t.validity.valid}))},(o=k(o="_hasInvalidInput"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._popup=n,this._formSelector=a,this._inputSelector=c,this._submitButtonSelector=s,this._inactiveButtonClass=l,this._inputErrorClass=f,this._errorClass=p,this._inputsList=function(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this._popup.querySelectorAll(this._inputSelector)),this._saveButtonForm=this._popup.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._popup.addEventListener("submit",(function(t){return t.preventDefault()})),this._setEventListeners(this._popup)}},{key:"_setEventListeners",value:function(){var t=this;this._popup.addEventListener("reset",(function(){t._saveButtonForm.classList.add(t._inactiveButtonClass),t._saveButtonForm.disabled=!0,t._inputsList.forEach((function(e){t._hideInputError(e)}))})),this._inputsList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputsList)?(this._saveButtonForm.disabled=!0,this._saveButtonForm.classList.add(this._inactiveButtonClass)):(this._saveButtonForm.disabled=!1,this._saveButtonForm.classList.remove(this._inactiveButtonClass))}},{key:"_showInputError",value:function(t,e){var n=this._popup.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._popup.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var L=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._about=n,this._avatar=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about,this._avatar.alt=t.name,this._avatar.src=t.avatar}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__images"),e._capture=e._popup.querySelector(".popup__text"),e}return e=u,(n=[{key:"open",value:function(t){this._image.src=t.link,this._capture.textContent=t.name,P(I(u.prototype),"open",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var R,U={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},A=function(t){if(Array.isArray(t))return q(t)}(R=document.querySelectorAll(".popup-validation"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(R)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=document.querySelector(".profile__name"),F=document.querySelector(".profile__about"),D=document.querySelector(".profile__avatar-image"),V=document.getElementById("name-input"),M=document.getElementById("about-input"),H={},N=document.querySelector(".profile__btn_type_edit"),J=document.querySelector(".profile__button-edit-avatar"),$=document.querySelector(".profile__button-add-card");function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new n({baseUrl:"https://nomoreparties.co/v1/plus-cohort-22",headers:{authorization:"a06d07f4-0395-4028-bda1-ecc0fed6969d","Content-Type":"application/json"}}),K=new L(x,F,D);Promise.all([G.getUser()]).then((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),n=e[0];return e[1],K.setUserInfo(n),H.id=n._id,void 0!==H.id})).then((function(t){t?G.getCards().then((function(t){Q.renderItems(t)})).catch():console.log("ERROR: ID Profile - ".concat(H._id,"."))})).catch((function(t){console.error(t)}));var Q=new i({render:function(t){return W(t,H).generate()}},".publications"),W=function(t,e){var n=new c(t,e,".cards",{handleCardClick:function(t){return X.open(t)},addLike:function(){G.likeCards(n.getIdCard()).then((function(t){n.indicateLike(t)})).catch((function(t){return console.log(t)}))},removeLike:function(){G.deleteLikeCards(n.getIdCard()).then((function(t){n.indicateLike(t)})).catch((function(t){return console.log(t)}))},deleteCardServer:function(){G.deleteCard(n.getIdCard()).then((function(){return n.deleteCard()})).catch((function(t){return console.log(t)}))}});return n},X=new T(".popup-image"),Y=new _({callback:function(t){Y.setTextSaveButton(!0),G.patchUser({name:t.name,about:t.about}).then((function(t){return K.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){Y.setTextSaveButton(!1)})),Y.close()}},".popup-edit-profile"),Z=new _({callback:function(t){Y.setTextSaveButton(!0),G.avatarProfile(t).then((function(t){K.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){Y.setTextSaveButton(!1)})),Z.close()}},".popup-edit-avatar"),tt=new _({callback:function(t){Y.setTextSaveButton(!0),G.postCard(t).then((function(t){Q.setItem(t),tt.close()})).catch().finally((function(){return Y.setTextSaveButton(!1)}))}},".popup-add-card");A.forEach((function(t){return function(t){new w(U,t).enableValidation()}(t)})),N.addEventListener("click",(function(){var t;t=K.getUserInfo(),V.value=t.name,M.value=t.about,Y.open()})),J.addEventListener("click",(function(){Z.open()})),$.addEventListener("click",(function(){tt.open()}))})();