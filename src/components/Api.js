export default class Api {
   
  constructor({ baseUrl, headers }) {
  // тело конструктора
  this._baseUrl = baseUrl;
  this._headers = headers;
  
}

_checkResponse(res) {
  // тут проверка ответа
  if (res.ok) {
    return res.json();
}
return Promise.reject(`Ошибка ${res.status}`);
}


getProfile(){
 return fetch(`${this._baseUrl}/users/me`,{
  headers: this._headers 
  }).then(this._checkResponse)
 
}

getInitialCards() {
  return fetch(`${this._baseUrl}/cards`,{
    headers: this._headers 
    }).then(this._checkResponse)
   
}

editProfile(name, about) {
  return fetch(`${this._baseUrl}/users/me`,{
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name,
      about
    })
    }).then(this._checkResponse)
   
  
}

addCard(name, link) {
  return fetch(`${this._baseUrl}/cards`,{
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name,
      link
    })
    }).then(this._checkResponse)
   
  
}

deleteCard(id) {
  return fetch(`${this._baseUrl}/cards${id}`,{
    method: 'DELETE',
    headers: this._headers,
    
    }).then(this._checkResponse).catch(console.log)
  
  
}

deleteLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`,{
    method: 'DELETE',
    headers: this._headers,
    
    }).then(this._checkResponse)
   
  
}

addLike(id) {
  return fetch(`${this._baseUrl}/cards/${id}/likes`,{
    method: 'PUT',
    headers: this._headers,
    
    }).then(this._checkResponse) 
   
  
}

addAvatar(avatar){
  return fetch(`${this._baseUrl}/users/me/avatar`,{
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar
    })
    
    }).then(this._checkResponse)
   
  }

// другие методы работы с API
}