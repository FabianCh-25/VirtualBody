import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/service/aula.service';

@Component({
  selector: 'app-aula-listar',
  templateUrl: './aula-listar.component.html',
  styleUrls: ['./aula-listar.component.css']
})
export class AulaListarComponent implements OnInit{
  dataSource: MatTableDataSource<Aula> = new MatTableDataSource();
  lista: Aula[] = [];
  displayedColumns: string[] = ['Codigo', 'Seccion', 'Vacante'];

  constructor(private aS: AulaService) {}
  
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }
}
