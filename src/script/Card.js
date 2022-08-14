class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#element-template")
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__images")
      .addEventListener("click", () => this._handleCardClick());
    this._element
      .querySelector(".elements__like-btn")
      .addEventListener("click", () => this._likeCard());
    this._element
      .querySelector(".element__btn-delete")
      .addEventListener("click", () => this._deleteCard());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__images").src = this._link;
    this._element.querySelector(".elements__title").textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _likeCard() {
    this._element
      .querySelector(".elements__like-btn")
      .classList.toggle("elements__like-btn_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}

export default Card;
