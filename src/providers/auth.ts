import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
// const APP_SERVER = 'http://localhost:5000/';
const APP_SERVER = 'http://192.168.2.1:5000/';
// const APP_SERVER = 'http://192.168.2.2:5000/';


@Injectable()
export class Auth {
  
  options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

  constructor(public http: Http, public authHttp: AuthHttp) {
        console.log('Hello Login Provider');
  }

  getToken(credentials){
    
    return this.http
    .post(APP_SERVER + 'auth', JSON.stringify(credentials),this.options)
    .map((response: Response) => response.json())

    }

  getInfo(){

      return this.authHttp.get(APP_SERVER + 'api/me',this.options)
      .map((response: Response) => response.json());

    }
    
  register(filleddata){ 

    var headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post(APP_SERVER +'api/signup',JSON.stringify(filleddata),{headers : headers})
    .map(res => res.json());

    }  

   getPosts(){
     
      return this.http.get("https://api.mlab.com/api/1/databases/test1/collections/post?apiKey=PaP2ShtIodNKoWQg8Ool_6MkC-ZDFY4D")
      .map(res => res.json());

   } 

}
