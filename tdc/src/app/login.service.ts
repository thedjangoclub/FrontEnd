import { Injectable } from '@angular/core';
import { Http , HttpModule  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http) { }
  url = "";

  login(data):Promise<any>{
    return this.http.post(this.url , data)
    .then(response => response.json())
    .catch(console.log("error"));
  }
}
