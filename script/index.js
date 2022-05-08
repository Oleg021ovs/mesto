//шаблоны профиля форм
const profileButton = document.querySelector(".profile__edit-button");
const pofileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const popupFormProfile = document.querySelector(".popup_form_profile");
const popupItemHeading = popupFormProfile.querySelector(
  ".popup__item_type_heading"
);
const popupItemSubHeading = popupFormProfile.querySelector(
  ".popup__item_type_subheading"
);
const closePopupProfile = popupFormProfile.querySelector(".popup__close");
const popupForm = popupFormProfile.querySelector(".popup__form");

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

// обработчик закрытие всех попапов на кнопку крестик!
//спасибо супер функция!!!
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__btn-close")) {
      closePopup(popup);
    }
  });
});

profileButton.addEventListener("click", function () {
  popupItemHeading.value = pofileTitle.textContent;
  popupItemSubHeading.value = profileText.textContent;
  openPopup(popupFormProfile);
  popupForm.reset();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  pofileTitle.textContent = popupItemHeading.value;
  profileText.textContent = popupItemSubHeading.value;
  closePopup(popupFormProfile);
}

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

//шаблоны элементов форм
const profileAddButton = document.querySelector(".profile__add-button");
const popupFormElement = document.querySelector(".popup_form_element");
const popupFormPhoto = popupFormElement.querySelector(".popup__form");
const popupItemTypeTitle = popupFormElement.querySelector(
  ".popup__item_type_title"
);
const popupItemTypeLink = popupFormElement.querySelector(
  ".popup__item_type_link"
);
const closePopupForm = popupFormElement.querySelector(".popup__close");
//overlay form popup
const formOverlay = document.querySelector(".popup_form_overlay");
const overlayImages = formOverlay.querySelector(".popup__overlay-images");
const overlayTitle = formOverlay.querySelector(".popup__overlay-title");
const closeOverlay = formOverlay.querySelector(".popup__close");

profileAddButton.addEventListener("click", function () {
  openPopup(popupFormElement);
  popupFormPhoto.reset();
});

function newElementSubmitCard(event) {
  event.preventDefault();

  elementsContainer.prepend(
    renderCard(popupItemTypeTitle.value, popupItemTypeLink.value)
  );

  closePopup(popupFormElement);
  popupFormPhoto.reset();
}

popupFormElement.addEventListener("submit", newElementSubmitCard);
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementsContainer = document.querySelector(".elements__element");

// клонирование карточек
function renderCard(name, link) {
  const cardTemplate = document.querySelector("#element-template").content;
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

// перебор массива
initialCards.forEach((elementCards) => {
  elementsContainer.append(renderCard(elementCards.name, elementCards.link));
});

//добавление Карточек из массива!
renderCard(initialCards);
