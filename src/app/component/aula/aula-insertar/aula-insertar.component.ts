import { Component, OnInit } from '@angular/core';
import { AulaService } from 'src/app/service/aula.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Aula } from 'src/app/model/aula';

@Component({
  selector: 'app-aula-insertar',
  templateUrl: './aula-insertar.component.html',
  styleUrls: ['./aula-insertar.component.css']
})

export class AulaInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  aula:Aula= new Aula();
  mensaje: string='';
  constructor(private aS: AulaService, private router: Router){}
  ngOnInit(): void {
      this.form=new FormGroup({
        id: new FormControl(),
        seccionAula: new FormControl(),
        vacanteAula: new FormControl(),
      })
  }
  aceptar(): void {
    this.aula.idAula = this.form.value['idAula'];
    this.aula.seccionAula = this.form.value['seccionAula'];
    this.aula.vacanteAula = this.form.value['vacanteAula'];
    if (this.form.value['seccionAula'].length > 0) {
      this.aS.insert(this.aula).subscribe((data) => {
        this.aS.list().subscribe((data) => {
          this.aS.setList(data);
        });
      });
      this.router.navigate(['aula']);
    } else {
      this.mensaje = 'Ingrese la seccion correcta';
    }
  }
}
