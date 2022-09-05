import "./index.css";
import Api from "../components/Api.js"
import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";
import PopupConfirn from "../components/popupConfirmForm.js"
import {
  profileButton,
  formProfile,
  popupItemHeading,
  popupItemSubHeading,
  profileAddButton,
  Elemform,
  btnAvatar,
  avatarForm,
  objSetting
} from "../utils/constants.js";




const profilevalid = new FormValidator(objSetting, formProfile);
const formValid = new FormValidator(objSetting, Elemform);
const avatarValid = new FormValidator(objSetting, avatarForm);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
      authorization: 'ca1e8f0e-ad2b-4d97-9ea3-6cb70d6bd0a7',
      'Content-Type': 'application/json',
 }
});

let userId;



const newElement = (data) => {
  const cardElement = new Card(data, "#element-template", userId, 
  //открытие карточки попап  
  handleCardClick, 
  // удаление карточки
  (item) => {
    popupConfirmDelete.openPopup();
    popupConfirmDelete.submitActive(() =>{
      api.deleteCard(item._id)
      .then(() => {
        cardElement.deleteCard()
        popupConfirmDelete.closePopup()
      })
      .catch((err) =>{
        console.log(err)
      })
    })
  },

  (cardElement) => {
    api.likeCard(data._id, cardElement.likeds())
    .then((res) =>{
      cardElement.likeds(res)
    })
    .catch((err) => {
      console.log(err)
    });
  })
  return cardElement.generateCard();
}

const section = new Section((card) => {
const cardElement = newElement(card)
section.addItem(cardElement);
},
".elements__element"
);

Promise.all([api.getUser(), api.getInitialCards()])
.then(([userInform, data]) => {
  userId = userInform._id
  userInfo.setUserInfo(
    userInform.name,
    userInform.about,
    userInform.avatar
  );
 section.renderItems(data)
})
.catch((err) =>{
  console.log(err);
})

const handleProfileFormSubmit = (data) => {
  addProfilePopup.saveLoading(true)
  api.profileUser(data.name, data.description)
.then(res => {
  userInfo.setUserInfo(res.name, res.about);
  addProfilePopup.closePopup();
})
.catch((err) => {
  console.log(err)
})
.finally(() => {
  addProfilePopup.saveLoading(false)
});
  //const { name, description } = data;
 // userInfo.setUserInfo(name, description);
  //addProfilePopup.closePopup();
  //profilevalid.toggleButtonState();
};

const newElementSubmitCard = (data) => {
  addCardPopup.saveLoading(true)
  api.addCard({
    name: data["form-name"],
    alt: data["form-name"],
    link: data["form-link"],
})
.then((data) => {
  const cardElement = newElement(data)
  section.addItem(cardElement)
  addCardPopup.closePopup();
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  addCardPopup.saveLoading(false)
});
//formValid.resetValidation();
  //const card = newElement({
   // name: data["form-name"],
    //alt: data["form-name"],
    //link: data["form-link"],
  //});

  //section.addItem(card);
};


const handleAvatarSubmit = (data) => {
  addPopupAvatar.saveLoading(true)
  api.avatar(
    data['avatar-link']
  )
  .then(res=> {
    userInfo.avatar(res.avatar)
    addPopupAvatar.closePopup();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    addPopupAvatar.saveLoading(false)
  });
}

const imagePopup = new PopupWithImage(".popup_form_overlay");


const popupConfirmDelete = new PopupConfirn(".popup_confirm_form")


//открытие попап аватар
btnAvatar.addEventListener("click", () => {
addPopupAvatar.openPopup();

})

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__text",
  profileAvatarSelector: ".profile__avatar-img"
});

const addCardPopup = new PopupWithForm(".popup_form_element",newElementSubmitCard);
const addProfilePopup = new PopupWithForm(".popup_form_profile",handleProfileFormSubmit);
const addPopupAvatar = new PopupWithForm(".popup_avatar_form", handleAvatarSubmit);

addPopupAvatar.setEventListeners();
addCardPopup.setEventListeners();
addProfilePopup.setEventListeners();
imagePopup.setEventListeners();
popupConfirmDelete.setEventListeners()
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



profilevalid.enableValidation();
formValid.enableValidation();
avatarValid.enableValidation();


//const renderCard = (data, elementsContainer) => {
 // const card = newElement(data);

  //elementsContainer.prepend(card);
//};


//section.renderItems();



