//Валидация форм!!!!!!!!
export default class FormValidator {
  constructor(objSetting, formElement) {
    this._objSetting =  objSetting;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._objSetting.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._objSetting.submitButtonSelector);
  }

  _formErrorElement(inputElement){
    return this._formElement.querySelector(`#error-${inputElement.id}`);
  };

  _showInputError(inputElement) {
      const errorElement = this._formErrorElement(inputElement);
      inputElement.classList.add(this._objSetting.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._objSetting.errorClass);
  };
  
  _hideInputError(inputElement){
    const errorElement = this._formErrorElement(inputElement);
    inputElement.classList.remove(this._objSetting.inputErrorClass);
    errorElement.classList.remove(this._objSetting.errorClass);
    errorElement.textContent = '';
    
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      
    })
  }; 

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._objSetting.inactiveButtonClass);
      this._buttonElement.disabled = "disabled";
      
    } else {
      this._buttonElement.classList.remove(this._objSetting.inactiveButtonClass);
      this._buttonElement.disabled = "";
    }
    
  }; 

 _setEventListeners() {
    this.toggleButtonState();
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
        
      });
    });
  };

  resetValidation() {
    this.toggleButtonState();

      this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
     
    });
    
    this._setEventListeners();
   
  }
}
 