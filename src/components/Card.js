class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

    this._cardElement = this._getTemplate();
    this._likeBtn = this._cardElement.querySelector(".elements__like-btn");
    this._elementImages = this._cardElement.querySelector(".elements__images");
    this._elementTitle = this._cardElement.querySelector(".elements__title");
    this._deleteBtn = this._cardElement.querySelector(".element__btn-delete");

    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._likeBtn.classList.toggle("elements__like-btn_active");
    });
    this._deleteBtn.addEventListener("click", () => {
      this._cardElement.remove();
      this._element = null;
    });
    this._elementImages.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._elementImages.src = this._link;
    this._elementImages.alt = this._name;
    this._elementTitle.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
