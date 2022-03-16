const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.popup-open');
const closePopup = popup.querySelector('.popup__close');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup__open_opened')
});

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup__open_opened')
});