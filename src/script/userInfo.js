export default class UserInfo {
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
}