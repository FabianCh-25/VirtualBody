import { EstudianteService } from 'src/app/service/estudiante.service';
import { Estudiante } from 'src/app/model/estudiante';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-estudiante-insertar',
  templateUrl: './estudiante-insertar.component.html',
  styleUrls: ['./estudiante-insertar.component.css']
})
export class EstudianteInsertarComponent {
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  mensaje: string = '';
  constructor(private aS: EstudianteService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      NombreEstudiante: new FormControl(),
      ApellidoEstudiante: new FormControl(),
      CorreoEstudiante: new FormControl(),
      TelefonoEstudiante: new FormControl(),
    });
  }
  aceptar(): void {
    this.estudiante.id = this.form.value['id'];
    this.estudiante.NombreEstudiante = this.form.value['NombreEstudiante'];
    this.estudiante.ApellidoEstudiante = this.form.value['ApellidoEstudiante'];
    this.estudiante.CorreoEstudiante = this.form.value['CorreoEstudiante'];
    this.estudiante.TelefonoEstudiante=this.form.value['TelefonoEstudiante']
    if (this.form.value['NombreEstudiante'].length > 0) {
      this.aS.insert(this.estudiante).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['estudiante']);
    }
    else {
      this.mensaje = 'Ingrese el nombre del estudiante!!';
    }
  }

}
