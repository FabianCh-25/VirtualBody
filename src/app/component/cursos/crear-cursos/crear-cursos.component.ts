import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../curso.model'; // Importa el modelo de curso
import { CursosService } from '../../../service/cursos.service'; // Importa el servicio

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {
  CodigoCurso: number;
  NombreCurso: string;
  Descripcion: string;

  constructor(private cursosService: CursosService) { // Inyecta el servicio
    this.CodigoCurso = 0;
    this.NombreCurso = '';
    this.Descripcion = '';
  }

  ngOnInit(): void {
  }

  // Método para agregar un curso utilizando el servicio
  agregarCurso(): void {
    const nuevoCurso = new Curso(this.CodigoCurso, this.NombreCurso, this.Descripcion);
    this.cursosService.agregarCurso(nuevoCurso);
    this.CodigoCurso = 0;
    this.NombreCurso = '';
    this.Descripcion = '';
  }
}

