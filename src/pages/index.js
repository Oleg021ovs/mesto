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
  profileAvatar,
  avatarForm,
  objSetting
} from "../utils/constants.js";

let userId

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: 'c31e051a-30ca-42d1-a852-06e817da4d0d',
    'Content-Type': 'application/json'
  }
});


api.getProfile()
.then(res => {
userInfo.setUserInfo(res.name, res.about)
userId = res._id
}).catch((err) => {
  console.log(err)
})

api.getInitialCards()
.then(cardList => {
  cardList.forEach(data => {
    const card = newElement({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id,
      avatar: data.avatar
    });
    section.addItem(card)
  })
}).catch((err) => {
  console.log(err)
})

// Перепробовал 1000 вариантов и все без результата ((((((((( не получается обьеденить эти функции 
// 10 часов просидел над этим все ломается !!! подскажите как тут быть?
/*Promise.all([api.getProfile(), api.getInitialCards()])
// тут деструктурируете ответ от сервера, чтобы было понятнее, что пришло
.then(res => {
  userInfo.setUserInfo(res.name, res.about)
  userId = res._id
  }).catch((err) => {
    console.log(err)
  })
  .then(cardList => {
    cardList.forEach(data => {
      const card = newElement({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userId: userId,
        ownerId: data.owner._id,
        avatar: data.avatar
      });
      section.addItem(card)
    })
  }).catch((err) => {
    console.log(err)
  })*/
  
const profilevalid = new FormValidator(objSetting, formProfile);
const formValid = new FormValidator(objSetting, Elemform);
const avatarValid = new FormValidator(objSetting, avatarForm);

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

profileAvatar.addEventListener("click", () => {
  avatarValid.resetValidation()
  popupFormAvatar.openPopup();
})

const handleProfileFormSubmit = (data) => {
  const { name, description } = data;
  addProfilePopup.loading(true)
  api.editProfile(name, description)
.then(() => {
  userInfo.setUserInfo(name, description);
  addProfilePopup.closePopup();
  profilevalid.toggleButtonState();
}).catch((err) => {
  console.log(err)
}).finally(() => {
  addProfilePopup.loading(false)
})
};

const newElementSubmitCard = (data) => {
addCardPopup.loading(true)
api.addCard(data["form-name"], data["form-link"])
.then(res => {
  console.log('res', res)
  const card = newElement({
  name: res.name,
  link: res.link,
  likes: res.likes,
  id: res._id,
  userId: userId,
  ownerId: res.owner._id,
  avatar: res.avatar 
  });
  section.addItem(card);
  addCardPopup.closePopup();
  formValid.resetValidation();
}).catch((err) => {
  console.log(err)
}).finally(() => {
  addCardPopup.loading(false)
})
};

const handleAvatarForm = (data) => {
  popupFormAvatar.loading(true)
api.addAvatar(data["avatar-link"]).then(res => {
  userInfo.setAvatar(res.avatar)
  popupFormAvatar.closePopup()
}).catch((err) => {
  console.log(err)
}).finally(() => {
  popupFormAvatar.loading(false)
})
}

profilevalid.enableValidation();
formValid.enableValidation();
avatarValid.enableValidation();

const newElement = (data) => {
  const cardElement = new Card(data, "#element-template", () => {
    imagePopup.openPopup(data.name, data.link)
  },
     (id) => {
      popupConfirmForm.openPopup()
      popupConfirmForm.changeSubmitHandle(() => {
        api.deleteCard(id)
        .then(res => {
          
          cardElement.deleteCards()
          popupConfirmForm.closePopup()
          
        }).catch((err) => {
          console.log(err)
        })
      })
    },
    (id) => {
      if(cardElement.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          cardElement.setLikes(res.likes)
        })
      } else {
        api.addLike(id)
        .then(res => {
          cardElement.setLikes(res.likes)
        }).catch((err) => {
          console.log(err)
        })
      } 
    }
    );
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

const popupConfirmForm = new PopupWithForm(".popup_confirm_form");
const popupFormAvatar = new PopupWithForm(".popup_avatar_form", handleAvatarForm);

popupFormAvatar.setEventListeners();
popupConfirmForm.setEventListeners();
addCardPopup.setEventListeners();
addProfilePopup.setEventListeners();
imagePopup.setEventListeners();
section.renderItems();
const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__text",
  profileAvatarSelector: ".profile__avatar-img"
});