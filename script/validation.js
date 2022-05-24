//Валидация форм!!!!!!!!
const formErrorElement = (formElement, inputElement) => {
  return formElement.querySelector(`#error-${inputElement.id}`);
};

const showInputError = (formElement, inputElement, errorMessage, Object) => {
  const errorElement = formErrorElement(formElement, inputElement);
  inputElement.classList.add(Object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(Object.errorClass);
};

const hideInputError = (formElement, inputElement, Object) => {
  const errorElement = formErrorElement(formElement, inputElement);
  inputElement.classList.remove(Object.inputErrorClass);
  errorElement.classList.remove(Object.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, Object) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      Object
    );
  } else {
    hideInputError(formElement, inputElement, Object);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const deactivateSubmitButton = (buttonElement, Object) => {
  buttonElement.classList.add(Object.inactiveButtonClass);
  buttonElement.disabled = "disabled";
};

const toggleButtonState = (inputList, buttonElement, Object) => {
  if (hasInvalidInput(inputList)) {
    deactivateSubmitButton(buttonElement, Object);
  } else {
    buttonElement.classList.remove(Object.inactiveButtonClass);
    buttonElement.disabled = "";
  }
};

const setEventListeners = (formElement, Object) => {
  const inputList = Array.from(
    formElement.querySelectorAll(Object.inputSelector)
  );
  const buttonElement = formElement.querySelector(Object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, Object);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, Object);
      toggleButtonState(inputList, buttonElement, Object);
    });
  });
};

const enableValidation = (Object) => {
  const formList = Array.from(document.querySelectorAll(Object.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    setEventListeners(formElement, Object);
  });
};

enableValidation(objSetting);
