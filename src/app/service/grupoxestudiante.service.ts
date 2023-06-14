import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GrupoxEstudiante } from '../model/grupoxestudiante';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class GrupoxestudianteService {
  private url = `${base_url}/grupoxestudiante`
  private listaCambio = new Subject<GrupoxEstudiante[]>()


  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<GrupoxEstudiante[]>(this.url);
  }
  insert(grupoxestudiante: GrupoxEstudiante) {
    return this.http.post(this.url, grupoxestudiante);
  }
  setList(listaNueva: GrupoxEstudiante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
