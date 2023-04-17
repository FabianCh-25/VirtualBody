import { Injectable } from '@angular/core';
import { Curso } from '../curso.model';
import { Subject } from 'rxjs'; // Importa Subject desde rxjs

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: Curso[] = [];
  private cursosActualizados = new Subject<Curso[]>(); // Crea un Subject para los cursos actualizados

  constructor() { }

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
}

