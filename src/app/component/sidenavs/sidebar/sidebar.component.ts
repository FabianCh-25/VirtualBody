import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  role:string = "";
  constructor(private lS:LoginService){}
  ngOnInit(): void {
    this.role=this.lS.showRole();
    console.log(this.role);
  }
  cerrar() {
    sessionStorage.clear();
  }
}
