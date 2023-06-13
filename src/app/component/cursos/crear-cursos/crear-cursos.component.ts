import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso.model';
import { CursosService } from 'src/app/service/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {
  form!: FormGroup;

  constructor(private cursosService: CursosService, private snackBar: MatSnackBar, private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      codigoCurso: ['', Validators.required],
      nombreCurso: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  agregarCurso(): void {
    if (this.form.invalid) {
      this.snackBar.open('Por favor, complete todos los campos correctamente y asegúrese de que el código del curso sea mayor a cero.', 'Cerrar', {
        duration: 5000,
      });
      return;
    }

    const { codigoCurso, nombreCurso, descripcion } = this.form.value;

    // Confirmación antes de guardar
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const nuevoCurso = new Curso(codigoCurso, nombreCurso, descripcion);
        this.cursosService.agregarCurso(nuevoCurso);
        this.form.reset();
      }
    });
  }
}
