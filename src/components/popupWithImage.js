import Popup from "../components/popup.js"
export default class PopupWithImage extends Popup {

  constructor(popupSelector){
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__overlay-images");
    this._caption = this._popup.querySelector(".popup__overlay-title");
    
  }
  openPopup({text, link}){
    this._image.src = link;
    this._image.alt = text;
    this._caption.textContent = text;
    super.openPopup();

  }
      
  }

 
  


    