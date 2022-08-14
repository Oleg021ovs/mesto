import './../pages/index.css';
import Card from "../script/Card.js";
import FormValidator from "../script/formValidator.js";
import Section from "../script/section.js";
import PopupWithImage from "../script/popupWithImage.js";
import PopupWithForm from "../script/popupWithForm.js";
import UserInfo from "../script/userInfo.js";
import {
  initialCards,
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
} from "../script/constants.js";

const objSetting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//кнопка +
profileAddButton.addEventListener("click", () => {
  addCardPopup.openPopup();
});

//кнопка профиля
profileButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  popupItemHeading.value = name;
  popupItemSubHeading.value = job;
  addProfilePopup.openPopup();
});

const handleProfileFormSubmit = (data) => {
  const { name, description } = data;
  userInfo.setUserInfo(name, description);
  addProfilePopup.closePopup();
  profilevalid.toggleButtonState();
};

const newElementSubmitCard = (data) => {
  const card = newElement({
    name: data["form-name"],
    alt: data["form-name"],
    link: data["form-link"],
  });
  section.addItem(card);
  addCardPopup.closePopup();
  formValid.toggleButtonState();
};

const newElement = (data) => {
  const cardElement = new Card(data, "#element-template", () => {
    imagePopup.openPopup(data.name, data.link);
  });
  return cardElement.generateCard();
};
const renderCard = (data, elementsContainer) => {
  const card = newElement(data);
  elementsContainer.prepend(card);
};
//Экземпляры классов
const profilevalid = new FormValidator(objSetting, formProfile);
const formValid = new FormValidator(objSetting, Elemform);
const section = new Section(
  { items: initialCards, renderer: renderCard },
  ".elements__element"
);
const imagePopup = new PopupWithImage(".popup_form_overlay");
const addCardPopup = new PopupWithForm(
  ".popup_form_element",
  newElementSubmitCard
);
const addProfilePopup = new PopupWithForm(
  ".popup_form_profile",
  handleProfileFormSubmit
);
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__text",
});

profilevalid.enableValidation();
formValid.enableValidation();
addCardPopup.setEventListeners();
addProfilePopup.setEventListeners();
imagePopup.setEventListeners();
section.renderItems();
