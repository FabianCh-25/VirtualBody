import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidenavbars',
  templateUrl: './sidenavbars.component.html',
  styleUrls: ['./sidenavbars.component.css']
})
export class SidenavbarsComponent implements OnInit{
  role:string="";

  constructor( private lS:LoginService){

  }
  ngOnInit(): void {
    this.role=this.lS.showRole();
    console.log(this.role);
  }
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.lS.showRole();
    return this.lS.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='USER' || this.role=='DOC'){
      return true;
    }else{
      return false;
    }
  }
}
