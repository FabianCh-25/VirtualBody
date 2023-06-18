import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // tienes q importar
import { HttpClient, HttpHeaders } from '@angular/common/http'; // tienes q importar
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
    let token = sessionStorage.getItem("token");

    return this.http.get<Actividad[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }

  insert(actividad:Actividad){
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url,actividad,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }

  getActividad() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Actividad[]){
    this.listaCambio.next(listaNueva);
  }

  listId(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.get<Actividad>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  update(a:Actividad){
    let token = sessionStorage.getItem("token");

    //return this.http.put(this.url+'/'+a.idActividad,a)
    return this.http.put(this.url,a,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
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
