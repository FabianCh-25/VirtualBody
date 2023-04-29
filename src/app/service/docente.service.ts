import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Docente } from '../model/docentes';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url = `${base_url}/docentes`
  private listaCambio = new Subject<Docente[]>
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }

  list() {
    return this.http.get<Docente[]>(this.url)
  }

  insert(docente: Docente) {
    return this.http.post(this.url, docente); // Insertar
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Docente[]) {
    this.listaCambio.next(listaNueva); //
  }

  listId(id: number) {
    return this.http.get<Docente>(`${this.url}/${id}`);
  }

  update(d: Docente) {
    return this.http.put(this.url + '/' + d.id, d);
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
