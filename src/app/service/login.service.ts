import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url= `${base_url}/signin`;
  constructor(private http:HttpClient) { }
}
