import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
import { Grupo } from 'src/app/model/grupo';
import { Estudiante } from 'src/app/model/estudiante';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { EstudianteService } from 'src/app/service/estudiante.service';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { GrupoService } from 'src/app/service/grupo.service';
=======
>>>>>>> b5c7d8e (ultimos cambios)
=======
import { GrupoService } from 'src/app/service/grupo.service';
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
>>>>>>> b5c7d8e (ultimos cambios)
@Component({
  selector: 'app-grupoxestudiante-insertar',
  templateUrl: './grupoxestudiante-insertar.component.html',
  styleUrls: ['./grupoxestudiante-insertar.component.css']
})

export class GrupoxestudianteInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
<<<<<<< HEAD
  grupoxEstudiante: GrupoxEstudiante = new GrupoxEstudiante()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
<<<<<<< HEAD
<<<<<<< HEAD
  listaEstudiante: Estudiante[] = [];
  listaGrupo: Grupo[] = [];
  idEstudianteSeleccionado: number = 0;
  idGrupoSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;
=======
  lista: Estudiante[] = [];
  idEstudianteSeleccionado: number = 0;
>>>>>>> b5c7d8e (ultimos cambios)
=======

  listaEstudiante: Estudiante[] = [];
  listaGrupo: Grupo[] = [];
  idEstudianteSeleccionado: number = 0;
  idGrupoSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
  grupoxestudiante: GrupoxEstudiante = new GrupoxEstudiante()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Estudiante[] = [];
  idEstudianteSeleccionado: number = 0;
>>>>>>> b5c7d8e (ultimos cambios)


  constructor(private gxeS: GrupoxestudianteService,
    private router: Router,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    private route: ActivatedRoute, private eS:EstudianteService, private gS: GrupoService) {
  }
  ngOnInit(): void {
    this.eS.list().subscribe(dataEstudiante => { this.listaEstudiante = dataEstudiante });
    this.gS.list().subscribe(dataGrupo => { this.listaGrupo = dataGrupo});

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      idGrupoxEstudiante: new FormControl(),
      fechaacceso: new FormControl(),
      grupo: new FormControl(),
      estudiante: new FormControl()
=======
    private route: ActivatedRoute, private eS:EstudianteService) {
=======
    private route: ActivatedRoute, private eS:EstudianteService, private gS: GrupoService) {
>>>>>>> 1d22189 (algunos errores en mi rama)
  }
  ngOnInit(): void {
    this.eS.list().subscribe(dataEstudiante => { this.listaEstudiante = dataEstudiante });
    this.gS.list().subscribe(dataGrupo => { this.listaGrupo = dataGrupo});

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      idGrupoxEstudiante: new FormControl(),
      fechaacceso: new FormControl(),
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
      grupo: new FormControl(),
      estudiante: new FormControl()
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
    private route: ActivatedRoute, private eS:EstudianteService) {
  }
  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idGrupoxEstudiante: new FormControl(),
      grupo: new FormControl(),
      estudiante: new FormControl(),
      fechaacceso: new FormControl(),
>>>>>>> b5c7d8e (ultimos cambios)
    });

  }

  aceptar(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    this.grupoxestudiante.idGrupoxEstudiante = this.form.value['idGrupoxEstudiante'];
<<<<<<< HEAD
    this.grupoxestudiante.fechaacceso = this.form.value['fechaacceso'];
    this.grupoxestudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxestudiante.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];
=======
    this.grupoxestudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxestudiante.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];
    this.grupoxestudiante.fechaacceso = this.form.value['fechaacceso'];
>>>>>>> b5c7d8e (ultimos cambios)
=======
    this.grupoxestudiante.idGrupoxEstudiante = this.form.value['idGrupoxEstudiante'];
    this.grupoxestudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxestudiante.estudiante.NombreEstudiante = this.form.value['estudiante.NombreEstudiante'];
    this.grupoxestudiante.fechaacceso = this.form.value['fechaacceso'];
>>>>>>> b5c7d8e (ultimos cambios)
    if (this.idEstudianteSeleccionado>0) {
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.grupoxestudiante.estudiante=e;
<<<<<<< HEAD
<<<<<<< HEAD

      let g = new Grupo();
      g.idGrupo = this.idGrupoSeleccionado;
      this.grupoxestudiante.grupo=g;
=======
>>>>>>> b5c7d8e (ultimos cambios)
      this.gxeS.insert(this.grupoxestudiante).subscribe(() => {
=======
    this.grupoxEstudiante.idGrupoxEstudiante = this.form.value['idGrupoxEstudiante'];
    this.grupoxEstudiante.fechaacceso = this.form.value['fechaacceso'];
    this.grupoxEstudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxEstudiante.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];

    if (this.idEstudianteSeleccionado>0) {
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.grupoxEstudiante.estudiante=e;

      let g = new Grupo();
      g.idGrupo = this.idGrupoSeleccionado;
      this.grupoxEstudiante.grupo=g;

      this.gxeS.insert(this.grupoxEstudiante).subscribe(() => {
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
      this.gxeS.insert(this.grupoxestudiante).subscribe(() => {
>>>>>>> b5c7d8e (ultimos cambios)
      this.gxeS.list().subscribe(data => {
            this.gxeS.setList(data);
          })
        })

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this.router.navigate(['/inicio/gruposxEstudiantes']);
    }
    else if(this.edicion){
      this.gxeS.update(this.grupoxestudiante).subscribe(() => {
=======
      this.router.navigate(['grupoxEstudiante']);
    }
    else if(this.edicion){
      this.gxeS.update(this.grupoxEstudiante).subscribe(() => {
>>>>>>> 1d22189 (algunos errores en mi rama)
        this.gxeS.list().subscribe((data) => {
          this.gxeS.setList(data);
        });
      });
    }
  }
<<<<<<< HEAD

  init(){
    if(this.edicion){
      this.gxeS.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idGrupoxEstudiante: new FormControl(data.idGrupoxEstudiante),
          fechaacceso: new FormControl(data.fechaacceso),
          grupo: new FormControl(data.grupo.nombreGrupo),
          estudiante: new FormControl(data.estudiante.nombreEstudiante)
        });
        this.idEstudianteSeleccionado=data.estudiante.idEstudiante;
        this.idGrupoSeleccionado=data.grupo.idGrupo;
      })
    }
  }
}
=======
      this.router.navigate(['grupoxestudiante']);
=======
>>>>>>> 1d22189 (algunos errores en mi rama)

  init(){
    if(this.edicion){
      this.gxeS.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idGrupoxEstudiante: new FormControl(data.idGrupoxEstudiante),
          fechaacceso: new FormControl(data.fechaacceso),
          grupo: new FormControl(data.grupo.nombreGrupo),
          estudiante: new FormControl(data.estudiante.nombreEstudiante)
        });
        this.idEstudianteSeleccionado=data.estudiante.idEstudiante;
        this.idGrupoSeleccionado=data.grupo.idGrupo;
        console.log(data);

      })
    }
  }
}
<<<<<<< HEAD
}
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
      this.router.navigate(['grupoxestudiante']);

  }
}
}
>>>>>>> b5c7d8e (ultimos cambios)
