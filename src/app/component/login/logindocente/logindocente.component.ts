import { DocenteService } from 'src/app/service/docente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-logindocente',
  templateUrl: './logindocente.component.html',
  styleUrls: ['./logindocente.component.css']
})
export class LogindocenteComponent  implements OnInit{
  iddoc:number=0;

  form:FormGroup=new FormGroup({});

  username: string = ""
  password: string = ""
  mensaje: string = ""

  constructor(private dS: DocenteService,private snackBar: MatSnackBar,private loginService: LoginService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
      this.form=new FormGroup({
        iddoc:new FormControl(),
        username:new FormControl(),
        password:new FormControl(),
      })
  }
  aceptar():void{
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);

      this.dS.listbyuser(this.username).subscribe((data) => {
        this.iddoc=data.idDocente;


        console.log('ID del docente:', this.iddoc);

        //this.router.navigate(['/inicio/docentes', this.iddoc])
        this.router.navigate(['/inicio/docentes'])

      });


    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
    });
  }
}
