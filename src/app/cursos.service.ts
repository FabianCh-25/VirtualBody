import { Injectable } from '@angular/core';
import { Curso } from './curso.model';
import { Subject } from 'rxjs'; // Importa Subject desde rxjs

import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: Curso[] = [];
  private url = `${environment.base}/cursos`
  private cursosActualizados = new Subject<Curso[]>(); // Crea un Subject para los cursos actualizados

  constructor (private http:HttpClient) {}

  agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
    this.cursosActualizados.next([...this.cursos]); // Emite un evento cuando se agrega un curso
  }

  obtenerCursos(): Curso[] {
    return [...this.cursos];
  }

  obtenerCursosActualizadosListener() { // Retorna el observable para que otros componentes se puedan suscribir
    return this.cursosActualizados.asObservable();
  }

  eliminarCurso(codigoCurso: number): void {
    this.cursos = this.cursos.filter(curso => curso.CodigoCurso !== codigoCurso);
    this.cursosActualizados.next([...this.cursos]);
  }

  obtenerCursoPorCodigo(codigoCurso: number): Curso {
    return this.cursos.find(curso => curso.CodigoCurso === codigoCurso) || new Curso(0, '', '');
  }

  editarCurso(cursoEditado: Curso): void {
    const indice = this.cursos.findIndex(curso => curso.CodigoCurso === cursoEditado.CodigoCurso);
    if (indice !== -1) {
      this.cursos[indice] = cursoEditado;
      this.cursosActualizados.next([...this.cursos]);
    }
  }

}

