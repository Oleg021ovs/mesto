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
        return Promise.all([this.getInitialCards(), userInf()])
       
      }
}

export default Api;