import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> c86e85a (estudiante y grupo solucionado)
=======
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Grupo } from '../model/grupo';
const base_url = environment.base
<<<<<<< HEAD

>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> c86e85a (estudiante y grupo solucionado)
@Injectable({
  providedIn: 'root'
})

export class GrupoService {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  private url = `${base_url}/grupo`;
=======
  private url = `${base_url}/grupojs`;
>>>>>>> b5c7d8e (ultimos cambios)
=======
  private url = `${base_url}/grupo`;
>>>>>>> c86e85a (estudiante y grupo solucionado)
=======
  private url = `${base_url}/grupojs`;
>>>>>>> b5c7d8e (ultimos cambios)
=======
  private url = `${base_url}/grupo`;
>>>>>>> c86e85a (estudiante y grupo solucionado)
  private listaCambio = new Subject<Grupo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
<<<<<<< HEAD
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
=======
>>>>>>> b5c7d8e (ultimos cambios)
    return this.http.get<Grupo[]>(this.url)
  }
  insert(grupo: Grupo) {
    return this.http.post(this.url, grupo);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  getList() {
    return this.listaCambio.asObservable();
>>>>>>> b5c7d8e (ultimos cambios)
  }
=======
>>>>>>> c86e85a (estudiante y grupo solucionado)
=======
  getList() {
    return this.listaCambio.asObservable();
  }
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> c86e85a (estudiante y grupo solucionado)
  setList(listaNueva: Grupo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(grupo: Grupo) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    //return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
    return this.http.put(this.url, grupo);
>>>>>>> c86e85a (estudiante y grupo solucionado)
  }
  listarId(id: number) {
    return this.http.get<Grupo>(`${this.url}/${id}`);
  }
  eliminar(id: number) {

<<<<<<< HEAD
    return this.http.delete(`${this.url}/${idGrupo}`);
>>>>>>> b5c7d8e (ultimos cambios)
=======
    return this.http.delete(`${this.url}/${id}`);
>>>>>>> c86e85a (estudiante y grupo solucionado)
=======
    return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
=======
    //return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
    return this.http.put(this.url, grupo);
>>>>>>> c86e85a (estudiante y grupo solucionado)
  }
  listarId(id: number) {
    return this.http.get<Grupo>(`${this.url}/${id}`);
  }
  eliminar(id: number) {

<<<<<<< HEAD
    return this.http.delete(`${this.url}/${idGrupo}`);
>>>>>>> b5c7d8e (ultimos cambios)
=======
    return this.http.delete(`${this.url}/${id}`);
>>>>>>> c86e85a (estudiante y grupo solucionado)
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
