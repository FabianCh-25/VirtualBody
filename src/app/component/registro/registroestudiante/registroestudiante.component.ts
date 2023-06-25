import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Estudiante } from 'src/app/model/estudiante';
import { Roles } from 'src/app/model/roles';
import { Users } from 'src/app/model/users';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registroestudiante',
  templateUrl: './registroestudiante.component.html',
  styleUrls: ['./registroestudiante.component.css']
})
export class RegistroestudianteComponent implements OnInit{
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup = new FormGroup({});
  estudiante: Estudiante = new Estudiante();
  users: Users=new Users();
  mensaje: string = "";
  namearch: string = '';

  aaaaaaa: String="";

  constructor(
    private pS: EstudianteService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}
  ngOnInit(): void {


    this.form = new FormGroup({
      id: new FormControl(),
      nombreEstudiante: new FormControl(),
      apellidoEstudiante: new FormControl(),
      correoEstudiante: new FormControl(),
      telefonoEstudiante: new FormControl(),
      claveEstudiante: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
    });
  }
  aceptar(): void {
    this.estudiante.idEstudiante = this.form.value['id'];
    this.estudiante.nombreEstudiante = this.form.value['nombreEstudiante'];
    this.estudiante.apellidoEstudiante = this.form.value['apellidoEstudiante'];
    this.estudiante.correoEstudiante = this.form.value['correoEstudiante'];
    this.estudiante.telefonoEstudiante = this.form.value['telefonoEstudiante'];
    this.estudiante.claveEstudiante = this.form.value['claveEstudiante'];

  if (this.form.value["nombreEstudiante"].length > 0) {
    this.users.id = 0;
    this.users.enabled = true;
    this.users.username = this.form.value["username"];
    this.users.password = this.form.value["password"];

    let e = new Roles();
    e.id = 1;
    e.rol = "USER";

    this.users.role = e;

    this.aaaaaaa=  this.users.role.id.toString();

    console.log(this.aaaaaaa);
    console.log( this.users.role.rol);



          this.userService.insert(this.users).subscribe(
            (data) => {
              this.userService.last().subscribe(
                (data) => {


                  let e = new Users();
                  e.id = data.id;
                  console.log(e.id);
                  this.estudiante.users = e;

                  this.pS.insertnuevo(this.estudiante).subscribe(
                    () => {
                      this.router.navigate(['/loginE']);
                    }
                  );


                },
              );
            },
          );













  } else {
    this.mensaje = "Ingrese el nombre del estudiante!!!";
  }
  }
}{

}
