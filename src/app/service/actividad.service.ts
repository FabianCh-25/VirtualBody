import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; // tienes q importar
import { HttpClient } from '@angular/common/http'; // tienes q importar
import { Actividad } from '../model/actividad'; // tienes q importar

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private url=`${base_url}/actividades`

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Actividad[]>(this.url)
  }
}
