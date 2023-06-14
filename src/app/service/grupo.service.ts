import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Grupo } from '../model/grupo';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})

export class GrupoService {
  private url = `${base_url}/grupo`;
  private listaCambio = new Subject<Grupo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Grupo[]>(this.url)
  }
  insert(grupo: Grupo) {
    return this.http.post(this.url, grupo);
  }
  setList(listaNueva: Grupo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(grupo: Grupo) {
    //return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
    return this.http.put(this.url, grupo);
  }
  listarId(id: number) {
    return this.http.get<Grupo>(`${this.url}/${id}`);
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
