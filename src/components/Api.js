export default class Api {
   
    constructor({ baseUrl, headers }) {
    // тело конструктора
    this._baseUrl = baseUrl;
    this._headers = headers;
    
  }

  getProfile(){
   return fetch(`${this._baseUrl}/users/me`,{
    headers: this._headers 
    }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
   .catch(console.log)
    
    //res.ok ? res.json() : Promise.reject(res.status))
    
    
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,{
      headers: this._headers 
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`,{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards${id}`,{
      method: 'DELETE',
      headers: this._headers,
      
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: 'DELETE',
      headers: this._headers,
      
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
      method: 'PUT',
      headers: this._headers,
      
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  addAvatar(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
      
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    }

  // другие методы работы с API
}

