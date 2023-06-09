import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
import { Grupo } from 'src/app/model/grupo';
import { Estudiante } from 'src/app/model/estudiante';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { GrupoService } from 'src/app/service/grupo.service';
@Component({
  selector: 'app-grupoxestudiante-insertar',
  templateUrl: './grupoxestudiante-insertar.component.html',
  styleUrls: ['./grupoxestudiante-insertar.component.css']
})

export class GrupoxestudianteInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  grupoxestudiante: GrupoxEstudiante = new GrupoxEstudiante()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaEstudiante: Estudiante[] = [];
  listaGrupo: Grupo[] = [];
  idEstudianteSeleccionado: number = 0;
  idGrupoSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;


  constructor(private gxeS: GrupoxestudianteService,
    private router: Router,
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
    });

  }

  aceptar(): void {
    this.grupoxestudiante.idGrupoxEstudiante = this.form.value['idGrupoxEstudiante'];
    this.grupoxestudiante.fechaacceso = this.form.value['fechaacceso'];
    this.grupoxestudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxestudiante.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];
    if (this.idEstudianteSeleccionado>0) {
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.grupoxestudiante.estudiante=e;

      let g = new Grupo();
      g.idGrupo = this.idGrupoSeleccionado;
      this.grupoxestudiante.grupo=g;
      this.gxeS.insert(this.grupoxestudiante).subscribe(() => {
      this.gxeS.list().subscribe(data => {
            this.gxeS.setList(data);
          })
        })

      this.router.navigate(['/inicio/gruposxEstudiantes']);
    }
    else if(this.edicion){
      this.gxeS.update(this.grupoxestudiante).subscribe(() => {
        this.gxeS.list().subscribe((data) => {
          this.gxeS.setList(data);
        });
      });
    }
  }

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
