import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CostDTO } from 'src/app/model/costDTO';
import { MatriculaService } from 'src/app/service/matricula.service';

@Component({
  selector: 'app-reporte04g',
  templateUrl: './reporte04g.component.html',
  styleUrls: ['./reporte04g.component.css']
})
export class Reporte04gComponent implements OnInit{
  nameCounts: CostDTO[] = [];
  dataSource: MatTableDataSource<CostDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'apellido']


  constructor(private mS:MatriculaService){}

  ngOnInit(): void {
    this.mS.getCostbyCount().subscribe(data => {
      this.dataSource  = new MatTableDataSource(data);
    })
  }

  getClassroomByTeacher(): void{
    this.mS.getCostbyCount().subscribe((data: CostDTO[]) => {
      this.nameCounts = data;
    })
  }

}
