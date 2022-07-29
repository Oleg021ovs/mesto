import {
  openPopup, formOverlay
} from '../utils/constants.js';
export default class Card {
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector(".popup__overlay-images");
    this._popupTitle = document.querySelector(".popup__overlay-title");
  }

  _getTemplate(){
    const cardElement = document.querySelector('#element-template').
    content.querySelector('.elements__item').cloneNode(true);
  
    return cardElement;
  
  }

  generateCard(){
    this._element = this._getTemplate();
    this._elementImages = this._element.querySelector('.elements__images');
    this._elementTitle = this._element.querySelector('.elements__title');
    this._likeBtn = this._element.querySelector('.elements__like-btn');
    this._deleteBtn = this._element.querySelector('.element__btn-delete');
    this._elementImages.src = this._link;
    this._elementTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _handleOpenPopup(){
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupTitle.textContent = this._name;
    openPopup(formOverlay);
  }

  
  _setEventListeners(){
    this._elementImages.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    })

    this._likeBtn.addEventListener("click", () => {
      this._likeBtn.classList.toggle("elements__like-btn_active");
    });

    this._deleteBtn.addEventListener("click", () => {
      this._element.remove();
      
    });
  }
}





