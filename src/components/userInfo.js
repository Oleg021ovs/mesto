
export default class UserInfo {
    constructor(provileSelector) {
        this._nameElement = provileSelector.name
        this._JobElement = provileSelector.info
  
      this._Avatar = provileSelector.avatar
    }
  
    getUserInfo() {
      this._profileData = {
        name: this._nameElement.textContent,
        info: this._JobElement.textContent
      }
  
      this._profileData;
    }
  
    setUserInfo(profile) {
        this._nameElement.textContent = profile.name;
        this._JobElement.textContent = profile.job;
      this.Avatar(profile)
    }

    avatar(profile) {
        this._Avatar.src = profile.avatar
    }
  }

/*export default class UserInfo {
constructor({profileNameSelector, profileJobSelector}) {
this._nameElement = document.querySelector(profileNameSelector);
this._JobElement = document.querySelector( profileJobSelector);
}
getUserInfo(){
return {
    name: this._nameElement.textContent,
    job: this._JobElement.textContent
}
}

setUserInfo(title, job){
    this._nameElement.textContent = title;
    this._JobElement.textContent = job;
}
}*/