import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-curso-insertar',
  templateUrl: './curso-insertar.component.html',
  styleUrls: ['./curso-insertar.component.css']
})
export class CursoInsertarComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  curso: Curso = new Curso();
  mensaje: string = '';
  constructor(private cS: CursosService, private router: Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      codeCurso: new FormControl(),
      nameCurso: new FormControl(),
      descriptionCurso: new FormControl
    });
  }

  aceptar(): void{
    this.curso.idCurso = this.form.value['idCurso'];
    this.curso.codeCurso = this.form.value['codeCurso'];
    this.curso.nameCurso = this.form.value['nameCurso'];
    this.curso.descriptionCurso = this.form.value['descriptionCurso'];

    if(this.form.value['nameCurso'].length > 0){
      if(this.edicion){
        this.cS.update(this.curso).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.curso).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['/inicio/cursos']);
    }
  }

  init(){
    if(this.edicion){
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCurso: new FormControl(data.idCurso),
          codeCurso: new FormControl(data.codeCurso),
          nameCurso: new FormControl(data.nameCurso),
          descriptionCurso: new FormControl(data.descriptionCurso)
        });
      });
    }
  }

}
