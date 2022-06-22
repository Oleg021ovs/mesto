import Card from "./Card.js";
import FormValidator from "./formValidator.js";

const initialCards = [
  {
    name: "Стадион Краснодар",
    link: "https://avatars.mds.yandex.net/get-zen_doc/3618266/pub_5f1a8d3298ca962935990bba_5f1a9c4a7461176a85719888/scale_1200",
  },
  {
    name: "Сочи",
    link: "https://sun9-67.userapi.com/impg/YN1orxo14JUN4BpYlyeca5L2TGbAvtqfRFYK-A/zSrkg6ahZDI.jpg?size=1080x1080&quality=90&proxy=1&sign=65f7b9175b582cda9ef14c49a72a48f7&c_uniq_tag=q6qy1TmW8bILPFrfpgz3rUwWMixKol8xm4BWnXHnl9g",
  },
  {
    name: "Гузерипль Адыгея",
    link: "https://www.multitour.ru/files/imgs/9c5364f76f7d29e7c5eb6f5336ce6ba19f4c5b8a.jpeg",
  },
  {
    name: "Геленджик",
    link: "https://avatars.mds.yandex.net/get-zen_doc/51081/pub_5ba8da9a584c1f00aa3da58d_5ba8ddf58ad01000a9324950/scale_1200",
  },
  {
    name: "Прасковеевка",
    link: "https://photocentra.ru/images/main69/692142_main.jpg",
  },

  {
    name: "Горячий ключ",
    link: "https://allovertheus.ru/wp-content/uploads/0/c/0/0c02878b425566617bbaa9609ca3d026.jpg",
  },

  {
    name: "Озеро Абрау дюрсо",
    link: "https://a.d-cd.net/QCAAAgFCYOA-1920.jpg",
  },

  {
    name: "Бугазская коса",
    link: "https://top7travel.ru/wp-content/uploads/2021/07/8v7ap89v7897va89p.jpg",
  },
];
//шаблоны профиля форм
const elementsContainer = document.querySelector(".elements__element");
//const cardTemplate = document.querySelector("#element-template").content;
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
//const cardElement = popupFormProfile.querySelector(".popup__close");
//const profileForm = popupFormProfile.querySelector(".popup__form");

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
//const closePopupForm = popupFormElement.querySelector(".popup__close");
//overlay form popup
const formOverlay = document.querySelector(".popup_form_overlay");
const overlayImages = formOverlay.querySelector(".popup__overlay-images");
const overlayTitle = formOverlay.querySelector(".popup__overlay-title");
//const closeOverlay = formOverlay.querySelector(".popup__close");

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

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  popup.addEventListener("mousedown", closePopupMouse);
}

//Функции закрытия попапов
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function closePopupMouse(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  popup.removeEventListener("mousedown", closePopupMouse);
}

// обработчик закрытие всех попапов на кнопку крестик!
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup__btn-close")) {
      closePopup(popup);
    }
  });
});

//кнопка +
profileAddButton.addEventListener("click", function () {
  popupFormPhoto.reset();
  openPopup(popupFormElement);
});

//кнопка профиля
profileButton.addEventListener("click", function () {
  popupItemHeading.value = pofileTitle.textContent;
  popupItemSubHeading.value = profileText.textContent;
  openPopup(popupFormProfile);
});

function ImagesCard(name, link) {
  openPopup(formOverlay);
  overlayImages.src = link;
  overlayImages.alt = name;
  overlayTitle.textContent = name;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  pofileTitle.textContent = popupItemHeading.value;
  profileText.textContent = popupItemSubHeading.value;
  closePopup(popupFormProfile);
  profilevalid.toggleButtonState();
}

function newElementSubmitCard(evt) {
  evt.preventDefault();
  const element = {};
  element.name = popupItemTypeTitle.value;
  element.alt = popupItemTypeTitle.value;
  element.link = popupItemTypeLink.value;
  renderCard(element);
  evt.target.reset();
  closePopup(popupFormElement);
  formValid.toggleButtonState();
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

popupFormElement.addEventListener("submit", newElementSubmitCard);

profilevalid.enableValidation();
formValid.enableValidation();

function newElement(data) {
  const elementCards = new Card(data, "#element-template", ImagesCard);
  return elementCards.generateCard();
}

function renderCard(element) {
  elementsContainer.prepend(newElement(element));
}

initialCards.forEach(renderCard);

/*// клонирование карточек
function renderCard(name, link) {
  const elementCards = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const elementImages = elementCards.querySelector(".elements__images");
  const elementTitle = elementCards.querySelector(".elements__title");
  elementTitle.textContent = name;
  elementImages.src = link;
  elementImages.alt = name;

  //лайк карточки
  elementCards
    .querySelector(".elements__like-btn")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__like-btn_active");
    });

  //удаление карточки
  elementCards
    .querySelector(".element__btn-delete")
    .addEventListener("click", function (event) {
      event.target.closest(".elements__item").remove();
    });

  //открытие фото в попапе
  elementCards
    .querySelector(".elements__images")
    .addEventListener("click", function () {
      overlayImages.src = link;
      overlayImages.alt = name;
      overlayTitle.textContent = name;

      openPopup(formOverlay);
    });

  return elementCards;
}
closePopupMouse(popups);
// перебор массива
initialCards.forEach((elementCards) => {
  elementsContainer.append(renderCard(elementCards.name, elementCards.link));
});

//добавление Карточек из массива!
renderCard(initialCards);*/
