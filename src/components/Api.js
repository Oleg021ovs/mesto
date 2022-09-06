export default class Api {
  constructor({baseUrl, headers}){
      this._baseUrl = baseUrl;
      this._userUrl = `${this._baseUrl}/users/me`
      this._cardUrl = `${this._baseUrl}/cards`
      this._headers = headers;
      
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
      headers: this._headers,
    }).then(res => this._resp(res));
    }

    getInitialCards(){
      return fetch(this._cardUrl, {
        method: 'GET',
        headers: this._headers,
       
      }).then(res => this._resp(res))
    }

    profileUser(name, about) {
      return fetch(this._userUrl, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name,
          about
        }),
      }).then(res => this._resp(res));
    }

    addCard({name, link}) {
      return fetch(this._cardUrl, {
        method: "POST",
        headers: this._headers,
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
        headers: this._headers,
      }).then(res => this._resp(res));
    }

    likeCard(id, likeds) {
      if(likeds){
        return fetch(this._cardUrl + `/${id}/likes`, {
          method: "DELETE",
          headers: this._headers,
        }).then(res => this._resp(res));
      }else {
        return fetch(this._cardUrl + `/${id}/likes`, {
          method: "PUT",
          headers: this._headers,
        }).then(res => this._resp(res));
      }
    }

    avatar(avatar) {
      return fetch(`${this._userUrl}/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar
        })
      }).then(res => this._resp(res));
    }

  }