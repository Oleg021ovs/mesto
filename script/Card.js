export default class Card{
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

     
  }
// клонирование карточек
  _getTemplate(){
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const elementCards = cardTemplate.querySelector(".elements__item").cloneNode(true);
    const elementImages = elementCards.querySelector(".elements__images");
    const elementTitle = elementCards.querySelector(".elements__title");

    elementTitle.textContent = this._name;
    elementImages.src = this._link;
    elementImages.alt = this._name;

    return elementCards;
  }
//открытие фото в попапе
  _handleOverlay(){
    data.overlayImages.src = this._link;
    data.overlayImages.alt = this._name;
    data.overlayTitle.textContent = this._name;
    openPopup(data.formOverlay);
  }

  //общий слушатель
  _setEventListeners(){
    const likeBtn = this._element.querySelector('.elements__like-btn');
    const deleteBtn = this._element.querySelector('.element__btn-delete');
    const images = this._element.querySelector('.elements__images');
    images.addEventListener('click',() => {
      this._handleOverlay();
    });
    //лайк карточки
    likeBtn.addEventListener('click',() => {
      likeBtn.classList.toggle("elements__like-btn_active");
    });
    //удаление карточки
    deleteBtn.addEventListener('click', () =>{
      deleteBtn.closest(".elements__item").remove();
    });
  }

  renderCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    
    return this._element;

  };
};
