import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // Importa Subject desde rxjs

import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../model/curso';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private url = `${base_url}/cursos`
  private listaCambio = new Subject<Curso[]>
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient){}

  list(){
    let token = sessionStorage.getItem("token");

    return this.http.get<Curso[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }
  insert(curso: Curso){
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, curso,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Curso[]){
    this.listaCambio.next(listaNueva);
  }
  listId(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.get<Curso>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  update(c: Curso){
    let token = sessionStorage.getItem("token");

    //return this.http.put(this.url + '/' + c.idCurso, c);
    return this.http.put(this.url, c,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }
  eliminar(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}

