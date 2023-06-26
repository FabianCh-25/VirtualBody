import { GroupStudentDTO } from './../../../model/groupStudentDTO';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';

@Component({
  selector: 'app-reporte03g',
  templateUrl: './reporte03g.component.html',
  styleUrls: ['./reporte03g.component.css']
})
export class Reporte03gComponent implements OnInit{
  groupCounts: GroupStudentDTO[] = [];
  dataSource: MatTableDataSource<GroupStudentDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['grupo', 'cantidad']


  constructor(private gxeS:GrupoService){}

  ngOnInit(): void {
    this.gxeS.getStudentCountByGroup().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data);
    })
  }

  getClassroomByTeacher(): void{
    this.gxeS.getStudentCountByGroup().subscribe((data: GroupStudentDTO[]) => {
      this.groupCounts = data;
    })
  }


}
