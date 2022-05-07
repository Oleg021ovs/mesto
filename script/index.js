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
const popupClose = popupFormProfile.querySelector(".popup__close");
const popupForm = popupFormProfile.querySelector(".popup__form");

const popupOpen = function (popup) {
  popup.classList.add("popup_opened");
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

profileButton.addEventListener("click", function () {
  popupItemHeading.value = pofileTitle.textContent;
  popupItemSubHeading.value = profileText.textContent;
  popupOpen(popupFormProfile);
  popupForm.reset();
});

popupClose.addEventListener("click", function () {
  closePopup(popupFormProfile);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  pofileTitle.textContent = popupItemHeading.value;
  profileText.textContent = popupItemSubHeading.value;
  closePopup(popupFormProfile);
}

popupFormProfile.addEventListener("submit", formSubmitHandler);

const profileAddButton = document.querySelector(".profile__add-button");
const popupFormElement = document.querySelector(".popup_form_element");
const popupFormPhoto = document.querySelector(".popup__form");
const popupItemTypeTitle = document.querySelector(".popup__item_type_title");
const popupItemTypeLink = document.querySelector(".popup__item_type_link");
const popupFormClose = popupFormElement.querySelector(".popup__close");

profileAddButton.addEventListener("click", function () {
  popupOpen(popupFormElement);
  popupFormPhoto.reset();
});

popupFormClose.addEventListener("click", function () {
  closePopup(popupFormElement);
});

const  handlerSubmitAddForm = (event) => {
  event.preventDefault();
  renderCards({name: popupItemTypeTitle.value, link:  popupItemTypeLink.value});
}

popupFormPhoto.addEventListener('submit', handlerSubmitAddForm);


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

const elementsContainer = document.querySelector('.elements__element');

// клонирование карточек 
function renderCard(name, link){
  const cardTemplate = document.querySelector('#element-template').content;
  const elementCards = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const elementImages = elementCards.querySelector('.elements__images');
  const elementTitle = elementCards.querySelector('.elements__title');
   elementTitle.textContent = name;
   elementImages.src = link;
   elementImages.alt = name;
  return elementCards;
}

// перебор массива
initialCards.forEach((elementCards) => {
  elementsContainer.append(renderCard(elementCards.name, elementCards.link));
});


