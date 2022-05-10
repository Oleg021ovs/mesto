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
    name: "Краснодар",
    link: "https://tvkrasnodar.ru/upload/iblock/807/807c1d8f022174dc1bc5d18b60ad301d.jpg",
  },
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
