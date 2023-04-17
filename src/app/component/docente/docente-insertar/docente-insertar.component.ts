import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Docente } from 'src/app/model/docentes';
import * as moment from 'moment';
import { DocenteService } from 'src/app/service/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-insertar',
  templateUrl: './docente-insertar.component.html',
  styleUrls: ['./docente-insertar.component.css']
})
export class DocenteInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  docente: Docente = new Docente();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate(); // un dia anterior , por eso el -1
  constructor(private dS: DocenteService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nombreDocente: new FormControl(),
      apellidoDocente: new FormControl(),
      correoDocente: new FormControl(),
      claveDocente: new FormControl(),
      telefonoDocente: new FormControl()
    });
  }
  aceptar(): void {
    this.docente.id = this.form.value['id'];
    this.docente.nombreDocente = this.form.value['nombreDocente'];
    this.docente.apellidoDocente = this.form.value['apellidoDocente'];
    this.docente.correoDocente = this.form.value['correoDocente'];
    this.docente.claveDocente = this.form.value['claveDocente'];
    this.docente.telefonoDocente = this.form.value['telefonoDocente'];
    if (this.form.value['nombreDocente'].length > 0) {
      this.dS.insert(this.docente).subscribe((data) => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data); // copia el nuevo valor hacia esa variable
        })
      })
      this.router.navigate(['docentes']);
    }
    else {
      this.mensaje = 'Claro pe Mascota!!';
    }
  }
}

