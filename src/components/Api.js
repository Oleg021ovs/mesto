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