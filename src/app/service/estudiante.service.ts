import { Estudiante } from './../model/estudiante';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url = `${base_url}/estudiantejs`;
  private listaCambio = new Subject<Estudiante[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Estudiante[]>(this.url)
  }
  insert(estudiante: Estudiante) {
    return this.http.post(this.url, estudiante);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Estudiante[]) {
    this.listaCambio.next(listaNueva);
  }
  modificar(estudiante: Estudiante) {
    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante);

  }
  listarId(id: number) {
    return this.http.get<Estudiante>(`${this.url}/${id}`);
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
