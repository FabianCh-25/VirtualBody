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
      nombreEstudiante: new FormControl(),
      apellidoEstudiante: new FormControl(),
      correoEstudiante: new FormControl(),
      telefonoEstudiante: new FormControl(),
      claveEstudiante: new FormControl(),
    });
  }



  aceptar(): void {
    this.estudiante.idEstudiante = this.form.value['id'];
    this.estudiante.nombreEstudiante = this.form.value['nombreEstudiante'];
    this.estudiante.apellidoEstudiante = this.form.value['apellidoEstudiante'];
    this.estudiante.correoEstudiante = this.form.value['correoEstudiante'];
    this.estudiante.telefonoEstudiante = this.form.value['telefonoEstudiante'];
    this.estudiante.claveEstudiante = this.form.value['claveEstudiante'];


    if (this.form.value['nombreEstudiante'].length > 0 && this.form.value['apellidoEstudiante'].length > 0) {
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
      this.router.navigate(['/inicio/estudiante']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.eS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.idEstudiante),
          nombreEstudiante: new FormControl(data.nombreEstudiante),
          apellidoEstudiante: new FormControl(data.apellidoEstudiante),
          correoEstudiante: new FormControl(data.correoEstudiante),
          telefonoEstudiante: new FormControl(data.telefonoEstudiante),
          claveEstudiante: new FormControl(data.claveEstudiante),
        });
        console.log(data);
      });
    }
  }
}
