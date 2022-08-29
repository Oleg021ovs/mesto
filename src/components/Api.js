class Api {
  constructor({baseUrl, headers}){
      this.baseUrl = baseUrl;
      this.headers = headers;
  }

  _response(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);

  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this.headers,
    }).then(this._response);
    }

    addCard({name, link}) {
      return fetch(this.baseUrl + "/cards", {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      })
      .then(this._response);
    }

    userInf() {
      return fetch(this.baseUrl + "/users/me", {
        headers: this.headers,
      }).then(this._response);
    }
    profileUser(title, subtitle) {
      return fetch(this.baseUrl + "/users/me", {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: title,
          about: subtitle,
        }),
      }).then(this._response);
    }

    avatar({subTitle}) {
      return fetch(this.baseUrl + "/users/me/avatar", {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: subTitle,
        }),
      }).then(this._response);
    }
    deleteCard(id) {
      return fetch(this.baseUrl + `/cards/${id}`, {
        method: "DELETE",
        headers: this.headers,
      }).then(this._response);
    }
    likeCard(id) {
      return fetch(this.baseUrl + `/cards/likes/${id}`, {
        method: "PUT",
        headers: this.headers,
      }).then(this._response);
    }
    disLikeCard(id) {
      return fetch(this.baseUrl + `/cards/likes/${id}`, {
        method: "DELETE",
        headers: this.headers,
      }).then(this._response);
    }

    initialCardData() {
      return Promise.all([this.getInitialCards(), this.userInf()])
     
    }
}

export default Api;








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
