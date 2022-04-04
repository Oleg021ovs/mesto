const popup = document.querySelector(".popup");
let popupFormProfile = document.querySelector('.popup_form_profile');
const openPopup = document.querySelector(".popup-open");
const closePopup = popup.querySelector(".popup__close");
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__text');
let formElement = document.querySelector('.popup__form');
let nameInput = popupFormProfile.querySelector('.popup__item_heading');
let jobInput = popupFormProfile.querySelector('.popup__item_subheading');
let popupBtn = popupFormProfile.querySelector('.popup__btn');

openPopup.addEventListener("click", function () {
  popup.classList.add("popup__opened");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup__opened");
});

popupBtn.addEventListener('click', function() {
  popup.classList.remove("popup__opened");
  nameInput.value = profileUserName.textContent;
  jobInput.value = profileUserDescription.textContent;
  
  
})

function formSubmitHandler (evt) {
  
  evt.preventDefault();
                                                                    
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;  
  closePopup(popupFormProfile); formElement.reset();
 };

formElement.addEventListener('submit', formSubmitHandler);


