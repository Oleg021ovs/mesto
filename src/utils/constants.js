const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const profileButton = document.querySelector(".profile__edit-button");
const popupFormProfile = document.querySelector(".popup_form_profile");
const formProfile = popupFormProfile.querySelector(".popup__openform");
const popupItemHeading = popupFormProfile.querySelector(
  ".popup__item_type_heading"
);
const popupItemSubHeading = popupFormProfile.querySelector(
  ".popup__item_type_subheading"
);
const profileAddButton = document.querySelector(".profile__add-button");
const popupFormElement = document.querySelector(".popup_form_element");
const Elemform = popupFormElement.querySelector(".popup__Elemform");
const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const profileAvatar = document.querySelector(".profile__avatar");
const elementTemplate = document.querySelector("#element-template");
const elementElements = document.querySelector(".elements__element");
const popupFormAvatar = document.querySelector(".popup_avatar_form");
const btnAvatar = document.querySelector(".profile__avatar");
const avatarForm = document.querySelector(".popup__AvatarForm");

const objSetting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export  {
  initialCards,
  popupFormAvatar,
  elementTemplate,
  elementElements,
  profileTitle,
  profileText,
  profileAvatar, 
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
  btnAvatar,
  avatarForm,
  objSetting
}