import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Grupo } from '../model/grupo';
const base_url = environment.base
=======
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Grupo } from '../model/grupo';

const base_url = environment.base

>>>>>>> b5c7d8e (ultimos cambios)
@Injectable({
  providedIn: 'root'
})

export class GrupoService {
<<<<<<< HEAD
  private url = `${base_url}/grupo`;
=======
  private url = `${base_url}/grupojs`;
>>>>>>> b5c7d8e (ultimos cambios)
  private listaCambio = new Subject<Grupo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
<<<<<<< HEAD
    let token = sessionStorage.getItem("token");

    return this.http.get<Grupo[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }
  insert(grupo: Grupo) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, grupo,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
=======
    return this.http.get<Grupo[]>(this.url)
  }
  insert(grupo: Grupo) {
    return this.http.post(this.url, grupo);
  }
  getList() {
    return this.listaCambio.asObservable();
>>>>>>> b5c7d8e (ultimos cambios)
  }
  setList(listaNueva: Grupo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(grupo: Grupo) {
<<<<<<< HEAD
    let token = sessionStorage.getItem("token");

    //return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
    return this.http.put(this.url, grupo,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<Grupo>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  eliminar(id: number) {

    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
=======
    return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
  }
  listarId(idGrupo: number) {
    return this.http.get<Grupo>(`${this.url}/${idGrupo}`);
  }
  eliminar(idGrupo: number) {

    return this.http.delete(`${this.url}/${idGrupo}`);
>>>>>>> b5c7d8e (ultimos cambios)
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
