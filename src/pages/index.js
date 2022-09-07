import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";
import {
  initialCards,
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
  objSetting
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: 'c31e051a-30ca-42d1-a852-06e817da4d0d',
    'Content-Type': 'application/json'
  }
});


api.getProfile()
.then(res => {
//console.log('ответ', res)
userInfo.setUserInfo(res.name, res.about)
})

api.getInitialCards()
.then(cardList => {
  cardList.forEach(data => {
    const card = newElement({
      name: data.name,
      link: data.link
    });
    section.addItem(card)
  })
})
  
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

  api.editProfile()


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

  //formValid.toggleButtonState();
  formValid.resetValidation();
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
  { items: [], renderer: renderCard },
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