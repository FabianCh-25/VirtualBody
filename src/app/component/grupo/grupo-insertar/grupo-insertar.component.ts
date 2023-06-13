import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Grupo } from 'src/app/model/grupo';
import { GrupoService } from 'src/app/service/grupo.service';
@Component({
  selector: 'app-grupo-insertar',
  templateUrl: './grupo-insertar.component.html',
  styleUrls: ['./grupo-insertar.component.css']
})


export class GrupoInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  grupo: Grupo = new Grupo();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  edicion: boolean = false
  id: number = 0;

  constructor(
    private gS: GrupoService,
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
      nombreGrupo: new FormControl(),
      descripcionGrupo: new FormControl(),
    });
  }



  aceptar(): void {
    this.grupo.idGrupo = this.form.value['id'];
    this.grupo.nombreGrupo = this.form.value['nombreGrupo'];
    this.grupo.descripcionGrupo = this.form.value['descripcionGrupo'];



    if (this.form.value['nombreGrupo'].length > 0 && this.form.value['descripcionGrupo'].length > 0) {
      if (this.edicion) {
        this.gS.modificar(this.grupo).subscribe(() => {
          this.gS.list().subscribe(data => {
            this.gS.setList(data);
          });
        });
      } else {
        this.gS.insert(this.grupo).subscribe(() => {
          this.gS.list().subscribe(data => {
            this.gS.setList(data);
          })
        })
      }
      this.router.navigate(['grupo']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.gS.listarId(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.idGrupo),
          nombreGrupo: new FormControl(data.nombreGrupo),
          descripcionGrupo: new FormControl(data.descripcionGrupo),
        });
        console.log(data);
      });
    }
  }
}

