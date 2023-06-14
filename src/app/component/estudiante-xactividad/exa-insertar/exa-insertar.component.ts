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
    this.estudianteXActividad.estudiante.nombreEstudiante=this.form.value['estudiantenombre'];
    this.estudianteXActividad.act.titulo=this.form.value['actividadnombre'];



    if (this.idEstudianteSelecionado>0) {
      let es = new Estudiante();
      es.idEstudiante = this.idEstudianteSelecionado;
      this.estudianteXActividad.estudiante=es;

      let act= new Actividad();
      act.idActividad= this.idActividadSelecionado;
      this.estudianteXActividad.act= act;
      this.exS.insert(this.estudianteXActividad).subscribe(() => {
      this.exS.list().subscribe(data => {
            this.exS.setList(data);
          })
        })
      this.router.navigate(['estudiantesXActividads']);
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
          estudiantenombre: new FormControl(data.estudiantenombre),
          actividadnombre: new FormControl(data.actividadnombre)
        });
        console.log(data);
      });
    }
  }
}