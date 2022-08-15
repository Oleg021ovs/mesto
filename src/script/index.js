import './../pages/index.css';
import Card from "./Card.js";
import FormValidator from "./formValidator.js";
import Section from "./section.js";
import PopupWithImage from "./popupWithImage.js";
import PopupWithForm from "./popupWithForm.js";
import UserInfo from "./userInfo.js";
import {
  initialCards,
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
} from "./constants.js";

const objSetting = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
const profilevalid = new FormValidator(objSetting, formProfile);
const formValid = new FormValidator(objSetting, Elemform);

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

profilevalid.enableValidation();
formValid.enableValidation();

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
addCardPopup.setEventListeners();
addProfilePopup.setEventListeners();
imagePopup.setEventListeners();
section.renderItems();
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__text",
});
