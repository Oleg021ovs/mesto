export default class Api {
  constructor({baseUrl, headers}){
      this.baseUrl = baseUrl;
      this._userUrl = `${this.baseUrl}/users/me`
      this._cardUrl = `${this.baseUrl}/cards`
      this.headers = headers;
      
  }

  _resp(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);

  }

  getUser() {
    return fetch(this._userUrl, {
      method: 'GET',
      headers: this.headers,
    }).then(res => this._resp(res));
    }

    getInitialCards(){
      return fetch(this._userUrl, {
        method: 'GET',
        headers: this.headers,
       
      }).then(res => this._resp(res))
    }

    profileUser(name, about) {
      return fetch(this._userUrl, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name,
          about
        }),
      }).then(res => this._resp(res));
    }

    addCard({name, link}) {
      return fetch(this._cardUrl, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      })
      .then(res => this._resp(res));
    }

    deleteCard(id) {
      return fetch(this._cardUrl + `/${id}`, {
        method: "DELETE",
        headers: this.headers,
      }).then(res => this._resp(res));
    }

    likeCard(id, likeds) {
      if(likeds){
        return fetch(this._cardUrl + `/${id}/likes`, {
          method: "DELETE",
          headers: this.headers,
        }).then(res => this._resp(res));
      }else {
        return fetch(this._cardUrl + `/${id}/likes`, {
          method: "PUT",
          headers: this.headers,
        }).then(res => this._resp(res));
      }
    }

    avatar(avatar) {
      return fetch(`${this._userUrl}/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar
        })
      }).then(res => this._resp(res));
    }

  }


    










/*export default class Api {
    constructor({baseUrl}){
        this._url = baseUrl.url;
        this._headers = baseUrl.headers;
    }

    _response(res){
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);

    }

    userInf() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me', {
        method: 'GET',
        headers: this.headers,
      }).then(this._response);
    }

    getInitialCards() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-48/cards', {
        method: 'GET',
        headers: this.headers,
      }).then(this._response);
      }

      profileUser(title, subtitle) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me', {
          method: "PATCH",
          headers: this.headers,
          body: JSON.stringify({
            name: title,
            about: subtitle,
          }),
        }).then(this._response);
      }

      addCard({name, link}) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-48/cards', {
          method: "POST",
          headers: this.headers,
          body: JSON.stringify({
            name: name,
            link: link,
          })
        })
        .then(this._response);
      }

      likeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/likes/${id}`, {
          method: "PUT",
          headers: this.headers,
        }).then(this._response);
      }

      disLikeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/likes/${id}`, {
          method: "DELETE",
          headers: this.headers,
        }).then(this._response);
      }

      deleteCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/${id}`, {
          method: "DELETE",
          headers: this.headers,
        }).then(this._response);
      }

      

      avatar({avatar}) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me/avatar', {
          method: "PATCH",
          headers: this.headers,
          body: JSON.stringify({
            avatar: avatar.link
          })
        }).then(this._response);
      }
      
      
      

      initialCardData() {
        return Promise.all([this.getInitialCards(), userInf()])
       
      }
}
*/
