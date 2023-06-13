import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/service/aula.service';
import * as moment from 'moment';


@Component({
  selector: 'app-aula-eliminar',
  templateUrl: './aula-eliminar.component.html',
  styleUrls: ['./aula-eliminar.component.css']
})
export class AulaEliminarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  aula: Aula = new Aula()
  mensaje: string = ""
  edicion: boolean = false
  id: number = 0;

  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private pS: AulaService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      seccionAula: new FormControl(),
      vacanteAula: new FormControl()
    });

  }
  aceptar(): void {
    this.aula.idAula = this.form.value['idAula'];
    this.aula.seccionAula = this.form.value['seccionAula'];
    this.aula.vacanteAula = this.form.value['vacanteAula'];

    if (this.form.value['seccionAula'].length > 0 && this.form.value['vacanteAula'].length > 0) {
      if (this.edicion) {
        this.pS.modificar(this.aula).subscribe(() => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.aula).subscribe(() => {
          this.pS.list().subscribe(data => {
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['aula']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          idAula: new FormControl(data.idAula),
          seccionAula: new FormControl(data.seccionAula),
          vacanteAula: new FormControl(data.vacanteAula)
        });
        console.log(data);
      });
    }
  }
}
