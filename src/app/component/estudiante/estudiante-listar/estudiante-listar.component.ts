import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { EstudianteService } from 'src/app/service/estudiante.service';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  lista: Estudiante[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'apellido', 'correo', 'telefono'];

  constructor(private aS: EstudianteService) { }
  //aS = Estudiante Service
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }
}
