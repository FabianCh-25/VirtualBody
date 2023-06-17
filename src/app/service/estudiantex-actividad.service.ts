import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<EstudianteXActividad[]>(this.url);
  }
  insert(estudianteXActividad: EstudianteXActividad) {
    return this.http.post(this.url, estudianteXActividad);
  }
  setList(listaNueva: EstudianteXActividad[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<EstudianteXActividad>(`${this.url}/${id}`);
  }

  update(ea: EstudianteXActividad) {
    return this.http.put(this.url + '/' + ea.idExA, ea);
    //return this.http.put(this.url, ea)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
