import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aula } from '../model/aula';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AulaService {
  private url = `${base_url}/Aulas`;
  private listaCambio = new Subject<Aula[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem("token");

    return this.http.get<Aula[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(aula: Aula) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, aula, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Aula[]) {
    this.listaCambio.next(listaNueva);
  }
  modificar(aula: Aula) {
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url + "/" + aula.idAula, aula,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<Aula>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  eliminar(id: number) {
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
