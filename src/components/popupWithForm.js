import Popup from "../components/popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;

    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__item");
    this._popupBtn = this._form.querySelector(".popup__btn");
    this._popupBtnText = this._popupBtn.textContent;
  };

  _getInputValues() {
    
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  };

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._getInputValues())
  }

  loading(isLoading){
if(isLoading){
  this._popupBtn.textContent = "сохранение..."
} else {
  this._popupBtn.textContent = this._popupBtnText;
}
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
