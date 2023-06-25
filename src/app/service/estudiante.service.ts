import { Estudiante } from './../model/estudiante';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
  private url = `${base_url}/estudiante`;
=======
  private url = `${base_url}/estudiantes`;
>>>>>>> 1909452 (corregi estudiante)
=======
  private url = `${base_url}/estudiante`;
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
<<<<<<< HEAD
  private url = `${base_url}/estudiantes`;
>>>>>>> 1909452 (corregi estudiante)
=======
  private url = `${base_url}/estudiante`;
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
  private url = `${base_url}/estudiante`;
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
  private listaCambio = new Subject<Estudiante[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");

    return this.http.get<Estudiante[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    })
  }
  insertnuevo(estudiante: Estudiante) {

    return this.http.post(this.url, estudiante);
  }
<<<<<<< HEAD
  insert(estudiante: Estudiante) {
<<<<<<< HEAD
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, estudiante, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
=======
    return this.http.post(this.url, estudiante);
<<<<<<< HEAD
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
<<<<<<< HEAD
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
  }
=======
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
  setList(listaNueva: Estudiante[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(estudiante: Estudiante) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
    let token = sessionStorage.getItem("token");

    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
=======
    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante);
>>>>>>> b5c7d8e (ultimos cambios)
=======
    return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    //return this.http.put(this.url, estudiante);
>>>>>>> 1909452 (corregi estudiante)
=======
    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante);
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante);
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
    return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    //return this.http.put(this.url, estudiante);
>>>>>>> 1909452 (corregi estudiante)
=======
    //return this.http.put(this.url + "/" + estudiante.idEstudiante, estudiante);
    return this.http.put(this.url, estudiante);
>>>>>>> 51dc56a (actualizar solucionado e integra con swagger)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170

  }
  listarId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<Estudiante>(`${this.url}/${id}`,{
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
  listbyuser(username:String){
    return this.http.get<Estudiante>(`${this.url}/listbyUser/${username}`)
  }
}
