import Card  from "./Card.js";
import FormValidator from "./formValidator.js";
import Section from "./section.js";
import PopupWithImage from "./popupWithImage.js";
import{
  initialCards,
  //openPopup,
  //closePopup
} from '../utils/constants.js';

//шаблоны профиля форм
const elementsContainer = document.querySelector(".elements__element");
const cardTemplate = document.querySelector("#element-template").content;
const profileButton = document.querySelector(".profile__edit-button");
const pofileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const popupFormProfile = document.querySelector(".popup_form_profile");
const formProfile = popupFormProfile.querySelector(".popup__openform");
const popupItemHeading = popupFormProfile.querySelector(
  ".popup__item_type_heading"
);
const popupItemSubHeading = popupFormProfile.querySelector(
  ".popup__item_type_subheading"
);

//шаблоны элементов форм
const profileAddButton = document.querySelector(".profile__add-button");
const popupFormElement = document.querySelector(".popup_form_element");
const popupFormPhoto = popupFormElement.querySelector(".popup__form");
const Elemform = popupFormElement.querySelector(".popup__Elemform");
const popupItemTypeTitle = popupFormElement.querySelector(
  ".popup__item_type_title"
);
const popupItemTypeLink = popupFormElement.querySelector(
  ".popup__item_type_link"
);

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
  popupFormPhoto.reset();
  openPopup(popupFormElement);
});

//кнопка профиля
profileButton.addEventListener("click", () => {
  popupItemHeading.value = pofileTitle.textContent;
  popupItemSubHeading.value = profileText.textContent;
  openPopup(popupFormProfile);
});


const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  pofileTitle.textContent = popupItemHeading.value;
  profileText.textContent = popupItemSubHeading.value;
  closePopup(popupFormProfile);
  profilevalid.toggleButtonState();
}

const  newElementSubmitCard = (evt) => {
  evt.preventDefault();
  
  const card = newElement({
    name:  popupItemTypeTitle.value,
    alt:  popupItemTypeTitle.value,
    link:  popupItemTypeLink.value
  })

  section.addItem(card);
  closePopup(popupFormElement);
  evt.target.reset();
  formValid.toggleButtonState();
  
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

popupFormElement.addEventListener("submit", newElementSubmitCard);

profilevalid.enableValidation();
formValid.enableValidation();


const newElement = (data) => {
  const cardElement = new Card(data, "#element-template", () => {
//console.log('123');

imagePopup.openPopup(data.name, data.link);
  })
   return cardElement.generateCard();
}


const renderCard = (data, elementsContainer) => {
const card = newElement(data)

  elementsContainer.prepend(card);

}

const section = new Section({items: initialCards, renderer: renderCard}, ".elements__element")
 
const imagePopup = new PopupWithImage(".popup_form_overlay");

imagePopup.setEventListeners();
section.renderItems();

