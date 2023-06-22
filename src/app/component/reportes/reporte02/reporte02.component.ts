import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleMatricula } from 'src/app/model/detalleMatricula';
import { ClassroomTeacherDTO } from 'src/app/model/classroomTeacherDTO';
import { DocenteService } from 'src/app/service/docente.service';

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})
export class Reporte02Component implements OnInit{
  classroomCounts: ClassroomTeacherDTO[] = [];
  dataSource: MatTableDataSource<ClassroomTeacherDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['docente', 'cantidad']


  constructor(private dS:DocenteService){}

  ngOnInit(): void {
    this.dS.getClassroomByTeacher().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data);
    })
  }

  getClassroomByTeacher(): void{
    this.dS.getClassroomByTeacher().subscribe((data: ClassroomTeacherDTO[]) => {
      this.classroomCounts = data;
    })
  }

}
