import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { EstudianteXActividad } from 'src/app/model/estudianteXActividad';
import * as moment from 'moment';
import { Estudiante } from 'src/app/model/estudiante';
import { Actividad } from 'src/app/model/actividad';
import { EstudiantexActividadService } from 'src/app/service/estudiantex-actividad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-exa-insertar',
  templateUrl: './exa-insertar.component.html',
  styleUrls: ['./exa-insertar.component.css']
})
export class ExaInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  estudianteXActividad: EstudianteXActividad = new EstudianteXActividad()
  mensaje: string = ""
  //maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Actividad[] = [];
  listae: Estudiante[]=[];
  idActividadSelecionado: number = 0;
  idEstudianteSelecionado: number=0;
  id: number = 0;
  edicion: boolean = false;

  constructor(private exS: EstudiantexActividadService,
    private router: Router,
    private aS:ActividadService,
    private route: ActivatedRoute, private eS:EstudianteService
    ) {
  }
  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.listae = data });
    this.aS.list().subscribe(data => { this.lista = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      idExA: new FormControl(),
      act: new FormControl(),
      estudiante :new FormControl(),
      calificacion: new FormControl(),
    });

  }
  aceptar(): void {
    this.estudianteXActividad.idExA = this.form.value['idEXA'];
    this.estudianteXActividad.calificacion= this.form.value['calificacion'];
    this.estudianteXActividad.estudiante.nombreEstudiante=this.form.value['estudiante.nombreEstudiante'];
    this.estudianteXActividad.act.titulo=this.form.value['act.titulo'];



    if (this.idEstudianteSelecionado>0) {
      let es = new Estudiante();
      es.idEstudiante = this.idEstudianteSelecionado;
      this.estudianteXActividad.estudiante=es;

      let a= new Actividad();
      a.idActividad= this.idActividadSelecionado;
      this.estudianteXActividad.act= a;
      this.exS.insert(this.estudianteXActividad).subscribe(() => {
      this.exS.list().subscribe(data => {
            this.exS.setList(data);
          })
        })
      this.router.navigate(['ExAs']);
    }
    else if(this.edicion){
      this.exS.update(this.estudianteXActividad).subscribe(()=>{
        this.exS.list().subscribe((data)=>{
          this.exS.setList(data);
        });
      });
    }
  }

  init() {
    if (this.edicion) {
      this.exS.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idEXA: new FormControl(data.IdEXA),
          calificacion: new FormControl(data.calificacion),
          estudiante: new FormControl(data.estudiante.nombreEstudiante),
          act: new FormControl(data.act.titulo)
        });
        this.idActividadSelecionado=data.act.idActividad;
        this.idEstudianteSelecionado=data.estudiante.idEstudiante;
        console.log(data);
      });
    }
  }
}
