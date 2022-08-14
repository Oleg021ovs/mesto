import Popup from "./popup.js";
export default class PopupWithImage extends Popup {
  openPopup(text, link) {
    const image = this._popup.querySelector(".popup__overlay-images");
    const caption = this._popup.querySelector(".popup__overlay-title");

    image.src = link;
    caption.textContent = text;
    super.openPopup();
  }
}
