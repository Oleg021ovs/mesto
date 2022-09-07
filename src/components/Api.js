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

  editProfile() {
    return fetch(`${this._baseUrl}/users/me`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist'
      })
      }).then(res => res.ok ? res.json() : Promise.reject(res.status)) 
     .catch(console.log)
    
  }

  // другие методы работы с API
}

