 
export default class Popup {
    constructor(popupSelector) {
         //this._popup = document.querySelector(".popup_form_overlay");
this._popup = document.querySelector(popupSelector);
this._handleEscClose = this._handleEscClose.bind(this);
    }

    
    open(){
        this._popup.classList.add("popup_opened");
  document.addEventListener("keydown", this.__handleEscClose);
    }

    close(){
        this._popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", this.__handleEscClose);
    }

    _handleEscClose(evt){

        if (evt.key === "Escape") {
            //const popupOpened = document.querySelector(".popup_opened");
            //closePopup(popupOpened);
            this.close();
          }
    }

    setEventListeners(){
     const closeBtn = this._popup = document.querySelector('.popup__close')

     this._popup.addEventListener('click', (evt) => {
if(!evt.target.closest('.popup__container') || evt.target === closeBtn) {
    this.close();
}
     })

}
}

