import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../curso.model';
import { CursosService } from '../cursos.service';
import { Subscription } from 'rxjs'; // Importa Subscription desde rxjs

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit, OnDestroy {
  cursos: Curso[] = [];
  private cursosSub!: Subscription; // Crea una variable para la suscripción

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosSub = this.cursosService.obtenerCursosActualizadosListener().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    }); // Suscríbete al observable y actualiza el array de cursos cuando se emita un evento
  }

  ngOnDestroy(): void {
    this.cursosSub.unsubscribe(); // Desuscríbete del observable al destruir el componente
  }
}


