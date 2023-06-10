import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { DetalleMatricula } from '../model/detalleMatricula';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class DetalleMatriculaService {
  private url = `${base_url}/detallesMatriculas`
  private listaCambio = new Subject<DetalleMatricula[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<DetalleMatricula[]>(this.url);
  }
  insert(detalleMatricula: DetalleMatricula) {
    return this.http.post(this.url, detalleMatricula);
  }
  setList(listaNueva: DetalleMatricula[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<DetalleMatricula>(`${this.url}/${id}`);
  }

  update(dm: DetalleMatricula) {
    return this.http.put(this.url + '/' + dm.idDetalleMatricula, dm);
    //return this.http.put(this.url, d)
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
