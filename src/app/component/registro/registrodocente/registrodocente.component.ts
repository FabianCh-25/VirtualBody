import { DocenteService } from 'src/app/service/docente.service';
import { Docente } from 'src/app/model/docentes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from 'src/app/model/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Roles } from 'src/app/model/roles';

@Component({
  selector: 'app-registrodocente',
  templateUrl: './registrodocente.component.html',
  styleUrls: ['./registrodocente.component.css']
})
export class RegistrodocenteComponent implements OnInit {
  id: number = 0;
  form: FormGroup = new FormGroup({});
  docente: Docente = new Docente();
  users: Users = new Users();
  mensaje: string = "";
  aaaaaaa: String="";

  namearch: string = '';

  constructor(
    private dS: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      idDocente: new FormControl(),
      nombre: new FormControl(),
      apellidoDocente: new FormControl(),
      correoDocente: new FormControl(),
      claveDocente: new FormControl(),
      telefonoDocente: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  aceptar(): void {
    this.docente.idDocente = this.form.value['idDocente'];
    this.docente.nombre = this.form.value['nombre'];
    this.docente.apellidoDocente = this.form.value['apellidoDocente'];
    this.docente.correoDocente = this.form.value['correoDocente'];
    this.docente.claveDocente = this.form.value['claveDocente'];
    this.docente.telefonoDocente = this.form.value['telefonoDocente'];

    if (this.form.value['nombre'].length > 0) {
      this.users.id = 0;
      this.users.enabled = true;
      this.users.username = this.form.value['username'];
      this.users.password = this.form.value['password'];

      let e = new Roles();
      e.id = 2;
      e.rol = 'DOC';

      this.users.role=e;

      this.aaaaaaa=  this.users.role.id.toString();

      console.log(this.aaaaaaa);
      console.log(this.users.role.rol);
      console.log(this.users.role.id);

      this.userService.insert(this.users).subscribe(
        (data) => {
          this.userService.last().subscribe(
            (data) => {


              let e = new Users();
              e.id = data.id;
              console.log(e.id);
              this.docente.users = e;

              this.dS.insertnuevo(this.docente).subscribe(
                () => {
                  this.router.navigate(['/loginD']);
                }
              );


            },
          );
        },
      );













} else {
this.mensaje = "Ingrese el nombre del docente!!!";
}
}
}
