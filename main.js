(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._userUrl="".concat(this._baseUrl,"/users/me"),this._cardUrl="".concat(this._baseUrl,"/cards"),this._headers=r}var n,r;return n=t,(r=[{key:"_resp",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUser",value:function(){var e=this;return fetch(this._userUrl,{method:"GET",headers:this._headers}).then((function(t){return e._resp(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._cardUrl,{method:"GET",headers:this._headers}).then((function(t){return e._resp(t)}))}},{key:"profileUser",value:function(e,t){var n=this;return fetch(this._userUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._resp(e)}))}},{key:"addCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch(this._cardUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._resp(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._cardUrl+"/".concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._resp(e)}))}},{key:"likeCard",value:function(e,t){var n=this;return t?fetch(this._cardUrl+"/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return n._resp(e)})):fetch(this._cardUrl+"/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return n._resp(e)}))}},{key:"avatar",value:function(e){var t=this;return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._resp(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a){var u,l,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l=function(){return c._likes.some((function(e){return e._id==c._userId}))},(u="likeds")in this?Object.defineProperty(this,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):this[u]=l,this._data=t,this._name=t.name,this._link=t.link,this._cardSelector=n,this._userId=a,this._ownershipId=t.ownership._id,this._likes=t.likes,this._cardElement=this._getTemplate(),this._likeBtn=this._cardElement.querySelector(".elements__like-btn"),this._elementImages=this._cardElement.querySelector(".elements__images"),this._elementTitle=this._cardElement.querySelector(".elements__title"),this._deleteBtn=this._cardElement.querySelector(".element__btn-delete"),this._likeNumber=this._cardElement.querySelector(".elements__like-number"),this._handleCardClick=r,this._handleLikeCard=o,this._handleDeleteCard=i}var t,r;return t=e,(r=[{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_ownershipCard",value:function(){this._ownershipId!==this._userId&&this._deleteCard.remove()}},{key:"numberLike",value:function(e){this._likeNumber.textContent=e.likes.length,this._likes=e.likes,this._likeBtn.classList.toggle("elements__like-btn_active",this.likeds())}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._handleLikeCard(e)})),this._deleteBtn.addEventListener("click",(function(){e._handleDeleteCard(e._data)})),this._elementImages.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._elementImages.src=this._link,this._elementImages.alt=this._name,this._elementTitle.textContent=this._name,this.numberLike(this._data),this._likeNumber.textContent=this._likes.length,this._ownershipCard(),this._setEventListeners(),this._cardElement}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._objSetting=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._objSetting.inputSelector)),this._buttonElement=this._formElement.querySelector(this._objSetting.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_formErrorElement",value:function(e){return this._formElement.querySelector("#error-".concat(e.id))}},{key:"_showInputError",value:function(e){var t=this._formErrorElement(e);e.classList.add(this._objSetting.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._objSetting.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formErrorElement(e);e.classList.remove(this._objSetting.inputErrorClass),t.classList.remove(this._objSetting.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._objSetting.inactiveButtonClass),this._buttonElement.disabled="disabled"):(this._buttonElement.classList.remove(this._objSetting.inactiveButtonClass),this._buttonElement.disabled="")}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close");this._popup.addEventListener("click",(function(n){(n.target.classList.contains("popup_opened")||n.target===t)&&e.closePopup()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__overlay-images"),t._caption=t._popup.querySelector(".popup__overlay-title"),t}return t=a,(n=[{key:"openPopup",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,p(y(a.prototype),"openPopup",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__item"),n._popupSubmitBtn=n._form.querySelector(".popup__btn"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;g(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){g(w(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"saveLoading",value:function(e){this._popupSubmitBtn.textContent=e?"Сохранение...":"Сохранить"}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._JobElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._JobElement.textContent}}},{key:"avatar",value:function(e){this._avatarElement.src=e}},{key:"setUserInfo",value:function(e,t,n){this._nameElement.textContent=e,this._JobElement.textContent=t,n&&(this._avatarElement.src=n)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function R(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"submitActive",value:function(e){this._handleSubmitConfirm=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitConfirm()})),q(U(a.prototype),"setEventListeners",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c),x=document.querySelector(".profile__edit-button"),A=document.querySelector(".popup_form_profile"),D=A.querySelector(".popup__openform"),V=A.querySelector(".popup__item_type_heading"),N=A.querySelector(".popup__item_type_subheading"),J=document.querySelector(".profile__add-button"),G=document.querySelector(".popup_form_element").querySelector(".popup__Elemform"),H=(document.querySelector(".profile__title"),document.querySelector(".profile__text"),document.querySelector(".profile__avatar"),document.querySelector("#element-template"),document.querySelector(".elements__element"),document.querySelector(".popup_avatar_form"),document.querySelector(".profile__avatar")),M=document.querySelector(".popup__AvatarForm"),z={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new i(z,D),K=new i(z,G),Q=new i(z,M),W=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-48",headers:{authorization:"ca1e8f0e-ad2b-4d97-9ea3-6cb70d6bd0a7","Content-Type":"application/json"}}),X=null,Y=function(e){var t=new r(e,"#element-template",X,handleCardClick,(function(e){te.openPopup(),te.submitActive((function(){W.deleteCard(e._id).then((function(){t.deleteCard(),te.closePopup()})).catch((function(e){console.log(e)}))}))}),(function(t){W.likeCard(e._id,t.likeds()).then((function(e){t.likeds(e)})).catch((function(e){console.log(e)}))}));return t.generateCard()},Z=new u((function(e){var t=Y(e);Z.addItem(t)}),".elements__element");Promise.all([W.getUser(),W.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,ne.setUserInfo(o.name,o.about,o.avatar),Z.renderItems(i)})).catch((function(e){console.log(e)}));var ee=new m(".popup_form_overlay"),te=new B(".popup_confirm_form"),ne=new P({profileNameSelector:".profile__title",profileJobSelector:".profile__text",profileAvatarSelector:".profile__avatar-img"}),re=new O(".popup_form_element",(function(e){re.saveLoading(!0),W.addCard({name:e["form-name"],alt:e["form-name"],link:e["form-link"]}).then((function(e){var t=Y(e);Z.addItem(t),re.closePopup()})).catch((function(e){console.log(e)})).finally((function(){re.saveLoading(!1)}))})),oe=new O(".popup_form_profile",(function(e){oe.saveLoading(!0),W.profileUser(e.name,e.description).then((function(e){ne.setUserInfo(e.name,e.about),oe.closePopup()})).catch((function(e){console.log(e)})).finally((function(){oe.saveLoading(!1)}))})),ie=new O(".popup_avatar_form",(function(e){ie.saveLoading(!0),W.avatar(e["avatar-link"]).then((function(e){ne.avatar(e.avatar),ie.closePopup()})).catch((function(e){console.log(e)})).finally((function(){ie.saveLoading(!1)}))}));ie.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),H.addEventListener("click",(function(){Q.resetValidation(),ie.openPopup()})),J.addEventListener("click",(function(){re.openPopup()})),x.addEventListener("click",(function(){var e=ne.getUserInfo(),t=e.name,n=e.job;V.value=t,N.value=n,$.resetValidation(),oe.openPopup()})),$.enableValidation(),K.enableValidation(),Q.enableValidation()})();