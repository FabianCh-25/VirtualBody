import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Estudiante } from './../../../model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-estudiante-insertar',
  templateUrl: './estudiante-insertar.component.html',
  styleUrls: ['./estudiante-insertar.component.css']
})

export class EstudianteInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  edicion: boolean = false
  id: number = 0;

  constructor(
    private eS: EstudianteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      NombreEstudiante: new FormControl(),
      ApellidoEstudiante: new FormControl(),
      CorreoEstudiante: new FormControl(),
      TelefonoEstudiante: new FormControl(),
      ClaveEstudiante: new FormControl(),
    });
  }



  aceptar(): void {
    this.estudiante.id = this.form.value['id'];
    this.estudiante.NombreEstudiante = this.form.value['NombreEstudiante'];
    this.estudiante.ApellidoEstudiante = this.form.value['ApellidoEstudiante'];
    this.estudiante.CorreoEstudiante = this.form.value['CorreoEstudiante'];
    this.estudiante.TelefonoEstudiante = this.form.value['TelefonoEstudiante'];
    this.estudiante.ClaveEstudiante = this.form.value['ClaveEstudiante'];


    if (this.form.value['NombreEstudiante'].length > 0 && this.form.value['ApellidoEstudiante'].length > 0) {
      if (this.edicion) {
        this.eS.modificar(this.estudiante).subscribe(() => {
          this.eS.list().subscribe(data => {
            this.eS.setList(data);
          });
        });
      } else {
        this.eS.insert(this.estudiante).subscribe(() => {
          this.eS.list().subscribe(data => {
            this.eS.setList(data);
          })
        })
      }
      this.router.navigate(['estudiante']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.eS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.id),
          NombreEstudiante: new FormControl(data.NombreEstudiante),
          ApellidoEstudiante: new FormControl(data.ApellidoEstudiante),
          CorreoEstudiante: new FormControl(data.CorreoEstudiante),
          TelefonoEstudiante: new FormControl(data.TelefonoEstudiante),
          ClaveEstudiante: new FormControl(data.ClaveEstudiante),
        });
        console.log(data);
      });
    }
  }
}

