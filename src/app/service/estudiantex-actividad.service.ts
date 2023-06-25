import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { EstudianteXActividad } from '../model/estudianteXActividad';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class EstudiantexActividadService {
private url = `${base_url}/ExAs`
  private listaCambio = new Subject<EstudianteXActividad[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");

    return this.http.get<EstudianteXActividad[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  listAp() {
    let token = sessionStorage.getItem("token");

    return this.http.get<EstudianteXActividad[]>(`${this.url}/aprobados`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(estudianteXActividad: EstudianteXActividad) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, estudianteXActividad,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  setList(listaNueva: EstudianteXActividad[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<EstudianteXActividad>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }

  update(ea: EstudianteXActividad) {
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url + '/' + ea.idExA, ea,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
    //return this.http.put(this.url, ea)
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
