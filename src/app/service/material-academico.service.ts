import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MaterialAcademico } from '../model/materialAcademico';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class MaterialAcademicoService {
  private url = `${base_url}/materialAcademico`
  private listaCambio = new Subject<MaterialAcademico[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");

    return this.http.get<MaterialAcademico[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(materialAcademico: MaterialAcademico){
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, materialAcademico,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  setList(listaNueva: MaterialAcademico[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.get<MaterialAcademico>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  update(mt: MaterialAcademico){
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url + '/' + mt.idmaterialacademico, mt,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
    //return this.http.put(this.url, mt);
  }
  eliminar(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  getConfirmaEliminacion(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
