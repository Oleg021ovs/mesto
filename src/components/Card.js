class Card {
  constructor(data, cardSelector, handleCardClick, handleLikeCard, handleDeleteCard, userId) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._userId = userId;
    this._ownershipId = data.ownership._id;
    this._likes = data.likes

    this._cardElement = this._getTemplate();
    this._likeBtn = this._cardElement.querySelector(".elements__like-btn");
    this._elementImages = this._cardElement.querySelector(".elements__images");
    this._elementTitle = this._cardElement.querySelector(".elements__title");
    this._deleteBtn = this._cardElement.querySelector(".element__btn-delete");
    this._likeNumber = this._cardElement.querySelector(".elements__like-number");

    this._handleCardClick = handleCardClick;
  }

  deleteCard(){
    this._cardElement.remove();
    this._cardElement = null;
  }

  ownershipCard(){
    if(this._ownershipId !== this._userId){
      this._deleteCard.remove()
    }
  }

  likeds = () =>{
    return this._likes.some((like) => like._id == this._userId)
  }

  numberLike(card){
    this._likeNumber.textContent = card.likes.length
    this._likes = card.likes
    this._likeBtn.classList.toggle("elements__like-btn_active", this.likeds())
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
      this._handleLikeCard(this)
    });
    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteCard(this._data)
    });
    this._elementImages.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._elementImages.src = this._link;
    this._elementImages.alt = this._name;
    this._elementTitle.textContent = this._name;
    this.numberLike(this._data);
    this._likeNumber.textContent = this._likes.length;
    this._ownershipCard();
    this._setEventListeners();
    return this._cardElement;
  }
}

export default Card;
