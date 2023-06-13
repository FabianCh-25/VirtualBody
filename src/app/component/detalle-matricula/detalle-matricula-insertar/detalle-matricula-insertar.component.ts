import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { DetalleMatricula } from 'src/app/model/detalleMatricula';
import { Docente } from 'src/app/model/docentes';
import { DetalleMatriculaService } from 'src/app/service/detalle-matricula.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocenteService } from 'src/app/service/docente.service';
import { Aula } from 'src/app/model/aula';
import { Curso } from 'src/app/curso.model';

@Component({
  selector: 'app-detalle-matricula-insertar',
  templateUrl: './detalle-matricula-insertar.component.html',
  styleUrls: ['./detalle-matricula-insertar.component.css']
})
export class DetalleMatriculaInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  detalleMatricula: DetalleMatricula = new DetalleMatricula()
  mensaje: string = ""
  //maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Docente[] = [];
  listaAula: Aula[] = [];
  listaCurso: Curso[] = [];
  idDocenteSeleccionado: number = 0;
  idAulaSeleccionado: number = 0;
  idCursoSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;

  constructor(private mS: DetalleMatriculaService,
    private router: Router,
    private route: ActivatedRoute, private dS:DocenteService) {
  }
  ngOnInit(): void {
    this.dS.list().subscribe(data => { this.lista = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      idDetalleMatricula: new FormControl(),
      fechaInscripcion: new FormControl(),
      docente :new FormControl(),
      aula : new FormControl(),
      curso: new FormControl()
    });

  }
  aceptar(): void {
    this.detalleMatricula.idDetalleMatricula = this.form.value['idDetalleMatricula'];
    this.detalleMatricula.fechaInscripcion = this.form.value['fechaInscripcion'];
    this.detalleMatricula.docente.nombre=this.form.value['docente.nombre'];
    this.detalleMatricula.aula.seccionAula=this.form.value['aula.seccionAula'];
    //this.detalleMatricula.curso.codeCurso=this.form.value['curso.codeCurso']


    if (this.idDocenteSeleccionado>0) {
      let d = new Docente();
      d.idDocente = this.idDocenteSeleccionado;
      this.detalleMatricula.docente=d;

      let a = new Aula();
      a.idAula = this.idAulaSeleccionado;
      this.detalleMatricula.aula = a;

      /*let c = new Curso();
      c.idCurso = this.idCursoSeleccionado;
      this.detalleMatricula.curso = c;*/
      this.mS.insert(this.detalleMatricula).subscribe(() => {
      this.mS.list().subscribe(data => {
            this.mS.setList(data);
          })
        })
      this.router.navigate(['detalleMatricula']);
    }
    else if(this.edicion){
      this.mS.update(this.detalleMatricula).subscribe(()=>{
        this.mS.list().subscribe((data)=>{
          this.mS.setList(data);
        });
      });
    }
  }

  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idDetalleMatricula: new FormControl(data.idDetalleMatricula),
          fechaInscripcion: new FormControl(data.fechaInscripcion),
          docente: new FormControl(data.docente.nombre), //Docente
          aula: new FormControl(data.aula.seccionAula),
          curso: new FormControl(data.curso.codeCurso)
        });
        this.idDocenteSeleccionado=data.docente.idDocente;
        this
        console.log(data);
      });
    }
  }
}
