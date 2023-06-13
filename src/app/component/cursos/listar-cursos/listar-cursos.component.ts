import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../../model/curso.model';
import { CursosService } from '../../../service/cursos.service';
import { Subscription } from 'rxjs'; // Importa Subscription desde rxjs
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
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
  totalCursos = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = this.cursos;
    this.cursosSub = this.cursosService.obtenerCursosActualizadosListener().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
      this.buscarCurso();
    });
    this.totalCursos = this.cursosFiltrados.length;
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
  cambiarPagina(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.cursosFiltrados = this.cursos.slice(startIndex, endIndex);
  }

  ngOnDestroy(): void {
    this.cursosSub.unsubscribe();
  }
}


