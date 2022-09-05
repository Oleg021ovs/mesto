
export default class UserInfo {
  constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
  this._nameElement = document.querySelector(profileNameSelector);
  this._JobElement = document.querySelector(profileJobSelector);
  this._avatarElement = document.querySelector(profileAvatarSelector);
  }
  getUserInfo(){
  return {
      name: this._nameElement.textContent,
      job: this._JobElement.textContent
  }
  }

  avatar(url){
    this._avatarElement.src = url;
  }
  
  setUserInfo(title, job, avatarPhoto){
      this._nameElement.textContent = title;
      this._JobElement.textContent = job;
      if(avatarPhoto) this._avatarElement.src = avatarPhoto;
  }
  }