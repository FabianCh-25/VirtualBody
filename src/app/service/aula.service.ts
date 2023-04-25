import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aula } from '../model/aula';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class AulaService {
  private url = `${base_url}/aula`;
  private listaCambio = new Subject<Aula[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Aula[]>(this.url);
  }
  insert(aula: Aula) {
    return this.http.post(this.url, aula);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Aula[]) {
    this.listaCambio.next(listaNueva);
  }
  modificar(aula: Aula) {
    return this.http.put(this.url + "/" + aula.id, aula);
  }
  listarId(id: number) {
    return this.http.get<Aula>(`${this.url}/${id}`);
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
