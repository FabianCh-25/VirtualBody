import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { MaterialAcademico } from 'src/app/model/materialAcademico';
import { CursosService } from 'src/app/service/cursos.service';
import { MaterialAcademicoService } from 'src/app/service/material-academico.service';

@Component({
  selector: 'app-material-academico-insertar',
  templateUrl: './material-academico-insertar.component.html',
  styleUrls: ['./material-academico-insertar.component.css']
})
export class MaterialAcademicoInsertarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  materialAcademico: MaterialAcademico = new MaterialAcademico()
  mensaje: string = ""
  lista: Curso[] = [];
  idCurosSeleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;

  constructor(private mts: MaterialAcademicoService, private router: Router, private route: ActivatedRoute, private cS: CursosService){}
  ngOnInit(): void {
    this.cS.list().subscribe(dataCurso => {this.lista = dataCurso });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      titulomaterial: new FormControl(),
      descripcion: new FormControl(),
      urlarchivo: new FormControl(),
      curso: new FormControl()
    });
  }

  aceptar(): void{
    this.materialAcademico.idmaterialacademico = this.form.value['idmaterialacademico'];
    this.materialAcademico.titulomaterial = this.form.value['titulomaterial'];
    this.materialAcademico.descripcion = this.form.value['descripcion'];
    this.materialAcademico.urlarchivo = this.form.value['urlarchivo'];
    this.materialAcademico.curso.codeCurso = this.form.value['curso.codeCurso']

    if(this.idCurosSeleccionado>0){
      let c = new Curso();
      c.idCurso = this.idCurosSeleccionado;
      this.materialAcademico.curso = c;

      this.mts.insert(this.materialAcademico).subscribe(() => {
        this.mts.list().subscribe(data => {
          this.mts.setList(data);
        })
      })
      this.router.navigate(['materialAcademico']);
    }
    else if(this.edicion){
      this.mts.update(this.materialAcademico).subscribe(() => {
        this.mts.list().subscribe((data) => {
          this.mts.setList(data);
        });
      });
    }
  }

  init() {
    if(this.edicion){
      this.mts.listId(this.id).subscribe((data:any) => {
        this.form = new FormGroup({
          idmaterialacademico: new FormControl(data.idmaterialacademico),
          titulomaterial: new FormControl(data.titulomaterial),
          descripcion: new FormControl(data.descripcion),
          urlarchivo: new FormControl(data.urlarchivo),
          curso: new FormControl(data.curso.codeCurso)
        });
        this.idCurosSeleccionado=data.curso.idCurso;
      })
    }
  }

}
