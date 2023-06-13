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
  private url = `${base_url}/grupojs`;
  private listaCambio = new Subject<Grupo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Grupo[]>(this.url)
  }
  insert(grupo: Grupo) {
    return this.http.post(this.url, grupo);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Grupo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(grupo: Grupo) {
    return this.http.put(this.url + "/" + grupo.idGrupo, grupo);
  }
  listarId(idGrupo: number) {
    return this.http.get<Grupo>(`${this.url}/${idGrupo}`);
  }
  eliminar(idGrupo: number) {

    return this.http.delete(`${this.url}/${idGrupo}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
