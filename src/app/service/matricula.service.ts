import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matricula } from '../model/matricula';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private url = `${base_url}/Matriculas`
  private listaCambio = new Subject<Matricula[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {  }
  list(){
    return this.http.get<Matricula[]>(this.url);
  }
  insert(matricula: Matricula){
    return this.http.post(this.url, matricula);
  }
  setList(listaNueva: Matricula[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    return this.http.get<Matricula>(`${this.url}/${id}`);
  }
  update(m: Matricula){
    return this.http.put(this.url + '/' + m.idMatricula, m);
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
