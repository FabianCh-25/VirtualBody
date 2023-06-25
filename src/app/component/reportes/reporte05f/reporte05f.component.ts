import { ActivityStudentDTO } from './../../../model/activityStudentDTO';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { ActividadService } from 'src/app/service/actividad.service';


@Component({
  selector: 'app-reporte05f',
  templateUrl: './reporte05f.component.html',
  styleUrls: ['./reporte05f.component.css']
})
export class Reporte05fComponent implements OnInit{
  studentCounts: ActivityStudentDTO[]=[];
  dataSource: MatTableDataSource<ActivityStudentDTO>=new MatTableDataSource();

  displayedColumns: string[]=['actividad','cantidad']
  constructor(private aS: ActividadService){

  }
  ngOnInit(): void {
      this.aS.getStudentbyActivity().subscribe(data =>{
        this.dataSource = new MatTableDataSource(data);
      })
  }
  getStudentbyActivity():void{
    this.aS.getStudentbyActivity().subscribe((data : ActivityStudentDTO[])=>{
      this.studentCounts =data;
    })
  }

}
