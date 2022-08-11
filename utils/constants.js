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
//const formOverlay = document.querySelector(".popup_form_overlay");
 //const popupImage = document.querySelector(".popup__overlay-images");
 //const popupTitle = document.querySelector(".popup__overlay-title");
//Функция открытия попапов
/*const openPopup = (popup) => {
 popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  popup.addEventListener("mousedown", closePopupMouse);
}

//Функции закрытия попапов
const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

const closePopupMouse = (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

const closePopup = (popup) => {
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
});*/

export  {
  initialCards,
  //openPopup,
  //closePopup
  
}