
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  // Models
  // import { RegisterModel } from './models/register.model';
  // import { LoginModel } from './models/login.model';

  const appKey = "kid_rJ_PXY02S" // APP KEY HERE;
  const appSecret = "eb18e36a686e4488bbd362263d05cc6b" // APP SECRET HERE;
  const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
  const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
  const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`

@Injectable({
  providedIn: 'root'
})
export class UserService {
   // currentUser: {
  //   username;
  //   password;
  // } = null;
  // get isLogged() {
  //   return !!this.currentUser;
  // }
  // ;
  // constructor(private http: HttpClient) {
  //   const currentUser = localStorage.getItem('current-user');
  //   this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  // }

  private currentAuthtoken : string;

  constructor(
    private http : HttpClient
  ) { }

  login({username, password}) {
    return this.http.post(
      loginUrl,
      JSON.stringify({username, password}),
      {
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  register({username, password, rePassword}) : Observable<Object> {
    return this.http.post(
      registerUrl, 
      JSON.stringify({username, password, rePassword}),
      { 
        headers: this.createAuthHeaders('Basic')
      }
    )
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    )
  }

  isLogged() {
    let authtoken : string = localStorage.getItem('authtoken');

    return authtoken === this.currentAuthtoken;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value : string) {
    this.currentAuthtoken = value;
  }

 createAuthHeaders(type : string) : HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
}
//   register(username: string, password: string, rePassword:string) {
//     // localStorage.setItem('current-user', JSON.stringify({ username, password, rePassword }));
//     // this.currentUser = { username, password};

//    this.http.post("http://127.0.0.1:5500/register", {username, password, rePassword}).subscribe((user)=>console.log(user))

//   }
//   ;
//   login(username: string, password: string) {
//     // localStorage.setItem('current-user', JSON.stringify({ username, password }));
//     // this.currentUser = { username, password };

//    this.http.post("http://127.0.0.1:5500/login", {username, password}).subscribe((user)=>console.log(user))

//   }
//   ;
//   logout() {
//     this.currentUser = null;
//     localStorage.removeItem('current-user');
//   }
//   ;
//}