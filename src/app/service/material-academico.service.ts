import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MaterialAcademico } from '../model/materialAcademico';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<MaterialAcademico[]>(this.url);
  }
  insert(materialAcademico: MaterialAcademico){
    return this.http.post(this.url, materialAcademico);
  }
  setList(listaNueva: MaterialAcademico[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    return this.http.get<MaterialAcademico>(`${this.url}/${id}`);
  }
  update(mt: MaterialAcademico){
    return this.http.put(this.url + '/' + mt.idmaterialacademico, mt);
    //return this.http.put(this.url, mt);
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
