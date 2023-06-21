import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { DetalleMatricula } from '../model/detalleMatricula';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    let token = sessionStorage.getItem("token");

    return this.http.get<DetalleMatricula[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(detalleMatricula: DetalleMatricula) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, detalleMatricula,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  setList(listaNueva: DetalleMatricula[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<DetalleMatricula>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }

  update(dm: DetalleMatricula) {
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url + '/' + dm.idDetalleMatricula, dm,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
    //return this.http.put(this.url, d)
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

  buscarPorFechas(fechaInicio: Date, fechaFin: Date){
    let token = sessionStorage.getItem("token");
    return this.http.get<DetalleMatricula[]>(`${this.url}/${fechaInicio}/${fechaFin}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
