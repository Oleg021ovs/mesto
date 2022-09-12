class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardSelector = cardSelector;

    this._cardElement = this._getTemplate();
    this._likeBtn = this._cardElement.querySelector(".elements__like-btn");
    this._elementImages = this._cardElement.querySelector(".elements__images");
    this._elementTitle = this._cardElement.querySelector(".elements__title");
    this._deleteBtn = this._cardElement.querySelector(".element__btn-delete");
    //this._likeCount = this._cardElement.querySelector(".elements__like-counter")
    this._likeCount = this._cardElement.querySelector(".elements__like-counter");
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _addLikeCard(){
    this._likeBtn.classList.add("elements__like-btn_active");
  }
  _removeLikeCard(){
    this._likeBtn.classList.remove("elements__like-btn_active");
    }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLikeClick(this._id))
      //this._likeBtn.classList.toggle("elements__like-btn_active");
    //});
    this._deleteBtn.addEventListener("click", () => this._handleDeleteClick(this._id));
      //this._cardElement.remove();
      
    this._elementImages.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  isLiked(){
    const userCardLike = this._likes.find(user => user._id === this._userId)
    return userCardLike
  }

  deleteCards(){
    this._cardElement.remove();
    this._cardElement = null;
  }
  

  setLikes(newLikes){
    console.log('newLikes', newLikes)
    this._likes = newLikes
    this._likeCount.textContent = this._likes.length
    //this._likeBtn.classList.toggle("elements__like-btn_active")
    
    if(this.isLiked()) {
      this._addLikeCard()
    } else {
      this._removeLikeCard()
    }
  }

  generateCard() {
    this._elementImages.src = this._link;
    this._elementImages.alt = this._name;
    this._elementTitle.textContent = this._name;
    this.setLikes(this._likes);

    if(this._ownerId !== this._userId) {
      this._cardElement.querySelector(".element__btn-delete").style.display = 'none'
    }
    this._setEventListeners();

    return this._cardElement;
  }

}

export default Card;