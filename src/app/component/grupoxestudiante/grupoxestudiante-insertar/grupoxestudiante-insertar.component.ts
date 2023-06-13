import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
import { Grupo } from 'src/app/model/grupo';
import { Estudiante } from 'src/app/model/estudiante';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { EstudianteService } from 'src/app/service/estudiante.service';
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
  lista: Estudiante[] = [];
  idEstudianteSeleccionado: number = 0;


  constructor(private gxeS: GrupoxestudianteService,
    private router: Router,
    private route: ActivatedRoute, private eS:EstudianteService) {
  }
  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idGrupoxEstudiante: new FormControl(),
      grupo: new FormControl(),
      estudiante: new FormControl(),
      fechaacceso: new FormControl(),
    });

  }

  aceptar(): void {
    this.grupoxestudiante.idGrupoxEstudiante = this.form.value['idGrupoxEstudiante'];
    this.grupoxestudiante.grupo.nombreGrupo = this.form.value['grupo.nombreGrupo'];
    this.grupoxestudiante.estudiante.nombreEstudiante = this.form.value['estudiante.nombreEstudiante'];
    this.grupoxestudiante.fechaacceso = this.form.value['fechaacceso'];
    if (this.idEstudianteSeleccionado>0) {
      let e = new Estudiante();
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.grupoxestudiante.estudiante=e;
      this.gxeS.insert(this.grupoxestudiante).subscribe(() => {
      this.gxeS.list().subscribe(data => {
            this.gxeS.setList(data);
          })
        })

      this.router.navigate(['grupoxestudiante']);

  }
}
}
