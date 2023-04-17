import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aula } from '../model/aula';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class AulaService {
  private url = `${base_url}/aula`;
  private listaCambio = new Subject<Aula[]>();
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Aula[]>(this.url);
  }
  insert(aula: Aula) {
    return this.http.post(this.url, aula);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Aula[]) {
    this.listaCambio.next(listaNueva);
  }
}
