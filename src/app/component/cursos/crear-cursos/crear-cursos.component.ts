import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../curso.model'; // Importa el modelo de curso
import { CursosService } from '../../../cursos.service'; // Importa el servicio
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {
  CodigoCurso: number;
  NombreCurso: string;
  Descripcion: string;

  constructor(private cursosService: CursosService, private snackBar: MatSnackBar, private dialog: MatDialog)  { // Inyecta el servicio
    this.CodigoCurso = 0;
    this.NombreCurso = '';
    this.Descripcion = '';
  }

  ngOnInit(): void {
  }

  // Método para agregar un curso utilizando el servicio
  agregarCurso(): void {

    if (this.CodigoCurso <= 0 || !this.NombreCurso.trim() || !this.Descripcion.trim()) {
      this.snackBar.open('Por favor, complete todos los campos correctamente y asegúrese de que el código del curso sea mayor a cero.', 'Cerrar', {
        duration: 5000,
      });
      return;
    }

    // Confirmación antes de guardar
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const nuevoCurso = new Curso(this.CodigoCurso, this.NombreCurso, this.Descripcion);
        this.cursosService.agregarCurso(nuevoCurso);
        this.CodigoCurso = 0;
        this.NombreCurso = '';
        this.Descripcion = '';
      }
    });
}

}
