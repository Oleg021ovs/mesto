const profileButton = document.querySelector('.profile__edit-button');
const pofileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const popupFormProfile = document.querySelector('.popup_form_profile');
const popupItemHeading = popupFormProfile.querySelector('.popup__item_type_heading');
const popupItemSubHeading = popupFormProfile.querySelector('.popup__item_type_subheading');
const popupClose = popupFormProfile.querySelector('.popup__close');
const popupForm = popupFormProfile.querySelector('.popup__form');

const popupOpen = function (popup) {
  popup.classList.add('popup_opened');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

profileButton.addEventListener('click', function(){
  popupItemHeading.value = pofileTitle.textContent;
  popupItemSubHeading.value = profileText.textContent;
  popupOpen(popupFormProfile);
  popupForm.reset();
})

popupClose.addEventListener('click', function() {
  closePopup(popupFormProfile);
})



function formSubmitHandler (evt) {
    evt.preventDefault(); 
    pofileTitle.textContent = popupItemHeading.value;
    profileText.textContent = popupItemSubHeading.value;
    closePopup(popupFormProfile);
}


popupFormProfile.addEventListener('submit', formSubmitHandler);

