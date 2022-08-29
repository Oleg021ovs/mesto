import "./index.css";
import Api from "../components/Api.js"
import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";
import PopupConfirn from "../components/popupConfirmForm.js";
import {
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
  objSetting
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
      authorization: 'ca1e8f0e-ad2b-4d97-9ea3-6cb70d6bd0a7',
      'Content-Type': 'application/json',
  }
});




let userId;

const profilevalid = new FormValidator(objSetting, formProfile);
const formValid = new FormValidator(objSetting, Elemform);
const popupAvatarValidator = new FormValidator(objSetting, popupFormAvatar);

profilevalid.enableValidation();
formValid.enableValidation();
popupAvatarValidator.enableValidation();


const userInfo = new UserInfo({
  name: profileTitle,
  info: profileText,
  avatar: profileAvatar
});

api.initialCardData()
.then(([cards, user]) => {
  
  userInfo.setUserInfo(user);
  userId = user._id;
  section.renderItems(cards)
}).catch((err) => console.log(err))

const newElement = (data) => {
  const cardElement = new Card({data: data, 
    handleCardClick: _ => imagePopup.openPopup(data),
    handleLikeClick: _ => cardElement.handleLikeClick(),
    handleDeleteClick: _ => {
      popupConfirmForm.submitActive( _=>{
        popupConfirmForm.loadingDelete(true);
        api.deleteCard(data._id)
        .then( _ => {
          cardElement.handleDeleteClick();
          popupConfirmForm.closePopup();
        })
        .catch( err => console.log(err))
        .finally( _ => popupConfirmForm.loadingDelete(false));
      })
      popupConfirmForm.openPopup();
    },
     },
     elementTemplate,
     api,
     userId
  );
  return cardElement;
};

const section = new Section(
  { 
    renderer: (item) => {
    const cardElement = newElement(item);
    const card = cardElement.generateCard();
    section.addItem(card);
    
  },
    
    },
    elementElements
);


const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_form_element",
  handleSubmit: (data) => {
    data["link"] = data["description"];
    data["name"] = data["name"];

    addCardPopup.loading(true);
    api.addCard(data.name, data.link)
    .then((response) => {
      const cardElement = newElement(response)
      const card = cardElement.generateCard();
      section.addItem(card);
      addCardPopup.closePopup();
    })
    .catch(err => console.log(err))
    .finally( _ => addCardPopup.loading(false))

  },
});
addCardPopup.setEventListeners();

const popupConfirmForm = new PopupConfirn(".popup_confirm_form");
popupConfirmForm.setEventListeners();

const profile = new PopupWithForm({
  popupSelector: ".popup_form_profile",
  handleSubmit: (formData) => {
    profile.loading(true);
    api.profileUser(formData)
    .then((user) => {
      userInfo.setUserInfo(user);
      profile.closePopup();
    })
    .catch(err => console.log(err))
    .finally( _ => profile.loading(false))
  },

});

profile.setEventListeners();

//кнопка профиля
profileButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  popupItemHeading.value = name;
  popupItemSubHeading.value = job;
  profilevalid.resetValidation();
  profile.openPopup();
});

//кнопка +
profileAddButton.addEventListener("click", () => {
  addCardPopup.openPopup();
  formValid.resetValidation();

});


const popupAvatarForm = new PopupWithForm({
  popupSelector: ".popup_avatar_form",
  handleSubmit: (formData) => {
    popupAvatarForm.loading(true);
    api.avatar(formData)
    .then((user) => {
      userInfo.avatar(user);
      popupAvatarForm.closePopup();
    })
    .catch( err => console.log(err))
    .finally( _ => popupAvatarForm.loading(false));

  },
});
popupAvatarForm.setEventListeners();

profileAvatar.addEventListener("click", (_) => {
  popupAvatarForm.openPopup();
  popupAvatarValidator.resetValidation();
})
const imagePopup = new PopupWithImage(".popup_form_overlay");
imagePopup.setEventListeners();




/*const handleProfileFormSubmit = (data) => {
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

  //section.addItem(card);
  //addCardPopup.closePopup();

  //formValid.toggleButtonState();
  formValid.resetValidation();
};





const renderCard = (data, elementsContainer) => {
  const card = newElement(data);

  elementsContainer.prepend(card);
};



const imagePopup = new PopupWithImage(".popup_form_overlay");

//const addCardPopup = new PopupWithForm(
 // ".popup_form_element",
 // newElementSubmitCard
//);
const addProfilePopup = new PopupWithForm(
  ".popup_form_profile",
  handleProfileFormSubmit
);
addCardPopup.setEventListeners();
addProfilePopup.setEventListeners();
imagePopup.setEventListeners();
//section.renderItems();
*/
