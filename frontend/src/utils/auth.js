
const BASE_URL = 'https://slt116.nomoredomains.club';

class Auth {
  constructor({password,email}) {
    this.password = password;
    this.email = email;
    console.log(this.email)
    
  }
  _checkStatus(result){
    if (result.ok) {
      return result.json()
  } else {
      return Promise.reject(`Ошибка: ${result.status}`)
  }
  }

  register({email,password}){
    return fetch(`${BASE_URL}/signup`, {
      method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })
      .then(result => {
        
       return this._checkStatus(result)
    })
  
  }


  login({email,password}){
    return fetch(`${BASE_URL}/signin`, {
      method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })

      .then(result => {
        return this._checkStatus(result)
     })
    
   }

   getToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(result => {
      return this._checkStatus(result)
    })
  }
}
const auth= new Auth({password:'',email:''})
export default auth;