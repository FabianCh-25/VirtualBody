import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> b5c7d8e (ultimos cambios)
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
import { GrupoxEstudiante } from '../model/grupoxestudiante';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class GrupoxestudianteService {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  private url = `${base_url}/gruposxEstudiantes`
  private listaCambio = new Subject<GrupoxEstudiante[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
<<<<<<< HEAD
    let token = sessionStorage.getItem("token");

    return this.http.get<GrupoxEstudiante[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(grupoxestudiante: GrupoxEstudiante) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, grupoxestudiante,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
=======
  private url = `${base_url}/grupoxestudiantejs`
=======
  private url = `${base_url}/grupoxestudiante`
>>>>>>> a227011 (falta aun grupoxest)
=======
  private url = `${base_url}/gruposxEstudiantes`
>>>>>>> 1d22189 (algunos errores en mi rama)
  private listaCambio = new Subject<GrupoxEstudiante[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
    return this.http.get<GrupoxEstudiante[]>(this.url);
  }
  insert(grupoxestudiante: GrupoxEstudiante) {
    return this.http.post(this.url, grupoxestudiante);
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  }
  setList(listaNueva: GrupoxEstudiante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  listId(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.get<GrupoxEstudiante>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  update(gp: GrupoxEstudiante){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url + '/' + gp.idGrupoxEstudiante, gp,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });

   /*
    return this.http.put(this.url, gp,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
    */
  }
  eliminar(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
=======
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  listId(id: number){
    return this.http.get<GrupoxEstudiante>(`${this.url}/${id}`);
  }
  update(gp: GrupoxEstudiante){
    return this.http.put(this.url + '/' + gp.idGrupoxEstudiante, gp)
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
<<<<<<< HEAD
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
}
