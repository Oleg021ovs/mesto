export default class popup {
    constructor (popupSelector){
        
this._formOverlay = document.querySelector(popupSelector);

    }

    _closePopupEscape = (evt) => {
        if (evt.key === "Escape"){
            this.closePopup(this._popup)
        }
    }

    openPopup(){
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._closePopupEscape);
    }

    closePopup(){
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._closePopupEscape);
    }

    setEventListeners(){
      const closeBtn = this._popup.querySelector('.popup__close');

      this._popup.addEventListener('mousedown', (evt) =>{
        if (evt.target.classList.contains("popup_opened") || evt.target === closeBtn) {
            this._closePopup();
      }
    })
}
}
