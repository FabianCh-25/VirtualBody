import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Curso } from 'src/app/curso.model';
import { CursosService } from 'src/app/cursos.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  curso!: Curso;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const codigoCurso = +params['codigoCurso'];
      this.curso = this.cursosService.obtenerCursoPorCodigo(codigoCurso);
    });
  }

  guardarCambios(): void {

    this.cursosService.editarCurso(this.curso);
    this.router.navigate(['/listar-cursos']);
  }
}

