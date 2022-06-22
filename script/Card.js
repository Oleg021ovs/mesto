export default class Card {
  constructor(data, cardSelector, ImagesCard) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
    this._elementCards = this._getTemplate();

    this._elementTitle = this._elementCards.querySelector(".elements__title");
    this._elementImages = this._elementCards.querySelector(".elements__images");
    this._likeBtn = this._elementCards.querySelector(".elements__like-btn");
    this._deleteBtn = this._elementCards.querySelector(".element__btn-delete");

    this._ImagesCard = ImagesCard;
  }

  _getTemplate() {
    const elementCards = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return elementCards;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._likeBtn.classList.toggle("elements__like-btn_active");
    });

    this._deleteBtn.addEventListener("click", () => {
      this._elementCards.remove();
      
    });

    this._elementImages.addEventListener("click", () => {
      this._ImagesCard(this._name, this._link);
    });
  }

  generateCard() {
    this._elementImages.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementImages.src = this._link;

    this._setEventListeners();

    return this._elementCards;
  }
}
