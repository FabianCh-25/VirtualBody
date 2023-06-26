import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matricula } from '../model/matricula';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupStudentDTO } from '../model/groupStudentDTO';
import { CostDTO } from '../model/costDTO';

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
    let token = sessionStorage.getItem("token");

    return this.http.get<Matricula[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(matricula: Matricula){
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, matricula,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  setList(listaNueva: Matricula[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.get<Matricula>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    }
    );
  }
  update(m: Matricula){
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url + '/' + m.idMatricula, m,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  eliminar(id: number){
    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }

  getCostbyCount(): Observable<CostDTO[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<CostDTO[]>(`${this.url}/cost-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }); //Aquí
  }

}
