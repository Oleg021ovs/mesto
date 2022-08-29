export default class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, cardSelector, api, userId) {
    
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._likes = data.likes;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._api = api;
    this._id = data._id 
    this._ownerId = data.owner._id 
    this._userId = userId
    

    //this._cardElement = this._getTemplate();
    //this._likeBtn = this._cardElement.querySelector(".elements__like-btn");
    //this._elementImages = this._cardElement.querySelector(".elements__images");
    //this._elementTitle = this._cardElement.querySelector(".elements__title");
    //this._deleteBtn = this._cardElement.querySelector(".element__btn-delete");
    //this._likeNumber = this._cardElement.querySelector(".elements__like-number");

   
  };

  _getTemplate() {
    const cardElement = this._cardSelector.content.querySelector(".elements__item").cloneNode(true);
   return cardElement;
  };

  generateCard() {
this._element = this._getTemplate()
this._elementImages = this._element.querySelector(".elements__images");
this._element.querySelector(".elements__title").textContent = this._name;
this._element.querySelector(".elements__like-number").textContent = this._likes.length;
    this._elementImages.src = this._link;
    this._elementImages.alt = this._name;
    
    this._setEventListeners();
    if(!(this._ownerId === this._userId)) {
      this._element.querySelector(".element__btn-delete").style.display = 'none'
  }
  
  if(this._likes.find((obj) => this._userId === obj._id)) {
    this._element.querySelector(".elements__like-btn").classList.add("elements__like-btn_active")
  }

    return this._element;
  };

  handleLikeClick(){
   const likeBtn = this._element.querySelector(".elements__like-btn");
   const likeNumber = this._element.querySelector(".elements__like-number");

    if(!(likeBtn.classList.contains("elements__like-btn_active"))) {
      this._api.likeCard(this._id)
        .then((data) => {
          likeBtn.classList.add("elements__like-btn_active")
          likeNumber.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.disLikeCard(this._id)
        .then((data) => {
          likeBtn.classList.remove("elements__like-btn_active")
          likeNumber.textContent = data.likes.length
        })
        .catch((err) => console.log(err))
    }
  };

  handleDeleteClick(){
    this._element.remove();
    this._element = null;
  };




  _setEventListeners() {
    this._element.querySelector(".elements__like-btn").addEventListener('click', (evt) => {
      this._handleLikeClick(evt)
    });

    this._element.querySelector(".element__btn-delete").addEventListener('click', (evt) => {
      this._handleDeleteClick(evt);
  });

  this._elementImages.addEventListener('click', () => {
    this._handleCardClick(this._name, this._link)
 }); 
};
}

