import { Component,OnInit } from '@angular/core';
import { EstudianteXActividad } from 'src/app/model/estudianteXActividad';
import {  MatTableDataSource } from '@angular/material/table'
import { EstudiantexActividadService } from 'src/app/service/estudiantex-actividad.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reporte06f',
  templateUrl: './reporte06f.component.html',
  styleUrls: ['./reporte06f.component.css']
})
export class Reporte06fComponent implements OnInit{
  role:string="";

  lista: EstudianteXActividad[] = [];
  dataSource: MatTableDataSource<EstudianteXActividad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'act', 'estudiante', 'calificacion']
  private idMayor: number = 0;

  constructor(private ls:LoginService,private eS: EstudiantexActividadService){
  }
ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

  this.eS.listAp().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    })
}
}
