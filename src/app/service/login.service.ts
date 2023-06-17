import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtRequest } from '../model/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url= `${base_url}/signin`;
  constructor(private http:HttpClient) { }
  login(request: JwtRequest) {
    return this.http.post("http://localhost:8080/authenticate", request);
  }


  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole(){
    let token = sessionStorage.getItem("token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;

  }
}
