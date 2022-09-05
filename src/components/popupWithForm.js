import Popup from "../components/popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__item");
    this._popupSubmitBtn = this._form.querySelector(".popup__btn")
  }

  _getInputValues() {
    
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  saveLoading(loading){
    if(loading){
      this._popupSubmitBtn.textContent = 'Сохранение...';

    }else{
      this._popupSubmitBtn.textContent = 'Сохранить';
    }
  }
}