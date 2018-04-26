import history from '../history';

class Auth {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.fetchData = this.fetchData.bind(this)
  }

  login(email, password) {
    this.authorize(email, password);
  }

  async authorize(email, password){
    const responseJson = await this.fetchData(email, password)

    if(responseJson !== undefined){
      this.setSession(responseJson.token, responseJson.user)
    }
  }

  async fetchData(email, password){
    const response = await fetch('http://localhost:8000/api/token-auth/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .catch(error => {
      console.log(console.error())
      alert("não foi possível realizar o login")
    })

    return response
  }

  setSession(authResult, userId) {
    // Set the time that the access token will expire at
    const result = {expiresIn: 60, accessToken: authResult}

    //time in milisenconds: 60 * 1000 = 1 min to expire
    let expiresAt = JSON.stringify((result.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', result.accessToken);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    console.log("expiresAt: "+expiresAt)
    history.replace('/feelings');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time

    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log("now: "+new Date().getTime())
    console.log("expiresAt: "+expiresAt)
    return new Date().getTime() < expiresAt;
  }
}

export default Auth
