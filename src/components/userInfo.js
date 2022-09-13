
export default class UserInfo {
  constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
  this._nameElement = document.querySelector(profileNameSelector);
  this._JobElement = document.querySelector( profileJobSelector);
  this._avatarElement = document.querySelector(profileAvatarSelector);
  }
  getUserInfo(){
  return {
      name: this._nameElement.textContent,
      job: this._JobElement.textContent
   }
  }

  setAvatar(avatar){
    this._avatarElement.src = avatar;
  }
  
  setUserInfo(title, job, avatarUrl){
      this._nameElement.textContent = title;
      this._JobElement.textContent = job;
      if(avatarUrl) this._avatarElement.src = avatarUrl
  }
  }