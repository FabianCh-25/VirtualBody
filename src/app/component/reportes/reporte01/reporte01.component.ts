import { Component, OnInit } from '@angular/core';
import { StudentCourseDTO } from 'src/app/model/studentCourseDTO';
import { MatTableDataSource } from '@angular/material/table'
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{
  studentCounts: StudentCourseDTO[] = [];
  dataSource: MatTableDataSource<StudentCourseDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['curso', 'cantidad']

  constructor(private cS: CursosService){}

  ngOnInit(): void {
    this.cS.getStudentsByCourse().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getStudentsByCourse(): void {
    this.cS.getStudentsByCourse().subscribe((data: StudentCourseDTO[]) => {
      this.studentCounts = data;
    });
  }
}
