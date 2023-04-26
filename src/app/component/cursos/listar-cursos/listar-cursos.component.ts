import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../../curso.model';
import { CursosService } from '../../../cursos.service';
import { Subscription } from 'rxjs'; // Importa Subscription desde rxjs
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit, OnDestroy {
  cursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  terminoBusqueda = '';
  private cursosSub!: Subscription;

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = this.cursos;
    this.cursosSub = this.cursosService.obtenerCursosActualizadosListener().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
      this.buscarCurso();
    });
  }

  buscarCurso(): void {
    this.cursosFiltrados = this.cursos.filter(curso => {
      return curso.NombreCurso.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
    });
  }

  eliminarCurso(codigoCurso: number): void {
    this.cursosService.eliminarCurso(codigoCurso);
  }

  editarCurso(curso: Curso): void {
    this.router.navigate(['/editar-cursos', curso.CodigoCurso]);
  }

  ngOnDestroy(): void {
    this.cursosSub.unsubscribe();
  }
}


