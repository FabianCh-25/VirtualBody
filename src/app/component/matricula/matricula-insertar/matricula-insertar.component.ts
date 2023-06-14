import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/model/estudiante';
import { Matricula } from 'src/app/model/matricula';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatriculaService } from 'src/app/service/matricula.service';

@Component({
  selector: 'app-matricula-insertar',
  templateUrl: './matricula-insertar.component.html',
  styleUrls: ['./matricula-insertar.component.css']
})
export class MatriculaInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  matricula: Matricula = new Matricula()
  mensaje: string = ""
  lista: Estudiante[] = [];
  idEstudianteSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;

  constructor(private maS: MatriculaService, private router: Router,
    private route:ActivatedRoute, private eS:EstudianteService
  ){}
  ngOnInit(): void {
    this.eS.list().subscribe(data => {this.lista = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      idMatricula: new FormControl(),
      estudiante: new FormControl(),
      fechaPagoMatricula: new FormControl(),
      costoMatricula: new FormControl
    });
  }
  aceptar(): void{
    this.matricula.idMatricula = this.form.value['idMatricula'];
    this.matricula.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];
    this.matricula.fechaPagoMatricula = this.form.value['fechaPagoMatricula'];
    this.matricula.costoMatricula = this.form.value['costoMatricula']

    if(this.idEstudianteSeleccionado>0){
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.matricula.estudiante = e;

      this.maS.insert(this.matricula).subscribe(() => {
        this.maS.list().subscribe(data => {
          this.maS.setList(data);
        })
      })
      this.router.navigate(['matricula']);
    }
    else if(this.edicion){
      this.maS.update(this.matricula).subscribe(() => {
        this.maS.list().subscribe((data) => {
          this.maS.setList(data);
        });
      });
    }
  }

  init(){
    if(this.edicion){
      this.maS.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idMatricula: new FormControl(data.idMatricula),
          estudiante: new FormControl(data.estudiante.nombreEstudiante),
          fechaPagoMatricula: new FormControl(data.fechaPagoMatricula),
          costoMatricula: new FormControl(data.costoMatricula)
        });
        this.idEstudianteSeleccionado = data.estudiante.idEstudiante;
      })
    }
  }

}

