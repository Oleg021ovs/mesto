import Popup from "./popup.js";

export default class PopupConfirn extends Popup {
constructor(popupSelector){
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._popupBtn = this._form.querySelector(".popup__btn");
    this._popupBtnText = this._popupBtn.textContent;
}

setEventListeners() {
    super.setEventListeners()

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmitConfirm()
    })
  }

  submitActive(active){
    this._handleSubmitConfirm = active;
  }

  loadingDelete(isLoading){
    if(isLoading) {
        this._popupBtn.textContent = "Сохранение..."
      } else {
        this._popupBtn.textContent = this._popupBtnText
      }
  }
}