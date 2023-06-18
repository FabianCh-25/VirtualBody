import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GrupoxEstudiante } from '../model/grupoxestudiante';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class GrupoxestudianteService {
  private url = `${base_url}/gruposxEstudiantes`
  private listaCambio = new Subject<GrupoxEstudiante[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
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
  }
  setList(listaNueva: GrupoxEstudiante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
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
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
