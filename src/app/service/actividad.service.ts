import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // tienes q importar
import { HttpClient } from '@angular/common/http'; // tienes q importar
import { Actividad } from '../model/actividad'; // tienes q importar
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private url=`${base_url}/actividades`
  private listaCambio= new Subject<Actividad[]>();
  private confirmaEliminacion = new Subject<Boolean>()


  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Actividad[]>(this.url)
  }

  insert(actividad:Actividad){
    return this.http.post(this.url,actividad);
  }

  getActividad() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Actividad[]){
    this.listaCambio.next(listaNueva);
  }

  listId(id: number){
    return this.http.get<Actividad>(`${this.url}/${id}`);
  }
  update(a:Actividad){
    return this.http.put(this.url+'/'+a.idActividad,a)
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
