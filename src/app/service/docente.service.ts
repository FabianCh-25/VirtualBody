import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Docente } from '../model/docentes';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url = `${base_url}/Docentes`
  private listaCambio = new Subject<Docente[]>
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  list() {
    let token = sessionStorage.getItem("token");

    return this.http.get<Docente[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }

  insert(docente: Docente) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, docente,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    }); // Insertar
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Docente[]) {
    this.listaCambio.next(listaNueva); //
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<Docente>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    }
    );
  }

  update(d: Docente) {
        let token = sessionStorage.getItem("token");

    return this.http.put(this.url + '/' + d.idDocente, d,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    //return this.http.put(this.url, d);
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
