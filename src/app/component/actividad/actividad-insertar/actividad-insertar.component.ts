import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/service/actividad.service';
import * as moment from 'moment'; // ro npm install moment


@Component({
  selector: 'app-actividad-insertar',
  templateUrl: './actividad-insertar.component.html',
  styleUrls: ['./actividad-insertar.component.css']
})
export class ActividadInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  actividad: Actividad = new Actividad();
  mensaje: string = 'Gaaa';
  minFecha: Date = moment().toDate();
  maxFecha: Date = moment().add(5, 'months').toDate();
  constructor(private aS: ActividadService, private router: Router) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      Titulo: new FormControl(),
      Descripcion: new FormControl(),
      FechaPublicacion: new FormControl(),
      FechaEntrega: new FormControl(),
    });
  }
  aceptar(): void {
    this.actividad.id = this.form.value['id'];
    this.actividad.Titulo = this.form.value['Titulo'];
    this.actividad.Descripcion = this.form.value['Descripcion'];
    this.actividad.FechaPublicacion = this.form.value['FechaPublicacion'];
    this.actividad.FechaEntrega = this.form.value['FechaEntrega'];
    // validamos q' campo titulo no este vacío
    if (this.form.value['Titulo'].length > 0 ) {
      this.aS.insert(this.actividad).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        })
      });
      this.mensaje = 'INgreso los campos de verda';
      this.router.navigate(['actividades']);
    }
    else {
      this.mensaje = 'Ingrese un Título!!';
    }
  }

}

