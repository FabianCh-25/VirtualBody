import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Docente } from 'src/app/model/docentes';
import * as moment from 'moment';
import { DocenteService } from 'src/app/service/docente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-docente-insertar',
  templateUrl: './docente-insertar.component.html',
  styleUrls: ['./docente-insertar.component.css']
})
export class DocenteInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  docente: Docente = new Docente();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate(); // un dia anterior , por eso el -1
  constructor(private dS: DocenteService, private router: Router, private route:ActivatedRoute) { }
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

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
      if(this.edicion){
        this.dS.update(this.docente).subscribe(()=>{
          this.dS.list().subscribe((data)=>{
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.docente).subscribe((data) => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data); // copia el nuevo valor hacia esa variable
          });
        });
      }
      this.router.navigate(['docentes']);
    }
    else {
      this.mensaje = 'Claro pe Mascota!!';
    }
  }
  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombreDocente: new FormControl(data.nombreDocente),
          apellidoDocente: new FormControl(data.apellidoDocente),
          correoDocente: new FormControl(data.correoDocente),
          claveDocente: new FormControl(data.claveDocente),
          telefonoDocente: new FormControl(data.telefonoDocente)
        });
        console.log(data);
      });
    }
  }
}

