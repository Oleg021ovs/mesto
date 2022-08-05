import Popup from "./popup.js"
export default class PopupWithImage extends Popup {
constructor(popupSelector){
    super(popupSelector)
        this._image = document.querySelector('.popup__overlay-images');
        this._caption = document.querySelector('.popup__overlay-title');

       
}

    open(name, link){
        this._link = link;
        this._name = name;
        this._image.src = this._link;
        this._caption.textContent = this._name;
        super.open();
    }
    
}