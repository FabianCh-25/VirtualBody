import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FormControl, FormGroup,FormsModule  } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { Estudiante } from 'src/app/model/estudiante';


@Component({
  selector: 'app-loginestudiante',
  templateUrl: './loginestudiante.component.html',
  styleUrls: ['./loginestudiante.component.css']
})

export class LoginestudianteComponent implements OnInit{
//   iddest:number=0;

//   form:FormGroup=new FormGroup({});

//   username: string = ""
//   password: string = ""
//   mensaje: string = ""

//   constructor(private dS: EstudianteService,private snackBar: MatSnackBar,private loginService: LoginService,private router:Router,private route:ActivatedRoute){}
//   ngOnInit(): void {
//       this.form=new FormGroup({
//         idest:new FormControl(),
//         username:new FormControl(),
//         password:new FormControl(),
//       })
//   }
//   aceptar():void{
//     let request = new JwtRequest();
//     request.username = this.username;
//     request.password = this.password;
//     this.loginService.login(request).subscribe((data: any) => {
//       sessionStorage.setItem("token", data.jwttoken);

//       this.dS.listbyuser(this.username).subscribe((data) => {
//         this.iddest=data.idEstudiante;


//         console.log('ID del estudiante:', this.iddest);

//         //this.router.navigate(['/inicio/docentes', this.iddoc])
//         this.router.navigate(['/inicio/docentes'])

//       });


//     }, error => {
//       this.mensaje = "Credenciales incorrectas!!!"
//       this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
//     });
//   }
// }
constructor(
  private loginService: LoginService,
  private router: Router,
  private snackBar: MatSnackBar
) {}

username: string = '';
password: string = '';
mensaje: string = '';

ngOnInit(): void {}

login() {
  let request = new JwtRequest();
  request.username = this.username;
  request.password = this.password;
  this.loginService.login(request).subscribe((data: any) => {
    sessionStorage.setItem("token", data.jwttoken);
    this.router.navigate(['/inicio/docentes']);
  }, error => {
    this.mensaje = "Credenciales incorrectas!!!"
    this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
  });
}
}
