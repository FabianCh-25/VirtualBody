import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // Importa Subject desde rxjs

import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Curso[]>(this.url)
  }
  insert(curso: Curso){
    return this.http.post(this.url, curso);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Curso[]){
    this.listaCambio.next(listaNueva);
  }
  listId(id: number){
    return this.http.get<Curso>(`${this.url}/${id}`);
  }
  update(c: Curso){
    //return this.http.put(this.url + '/' + c.idCurso, c);
    return this.http.put(this.url, c)
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}

