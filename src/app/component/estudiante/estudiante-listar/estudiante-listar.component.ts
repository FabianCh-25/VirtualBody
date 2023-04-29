import { EstudianteService } from './../../../service/estudiante.service';
import { Estudiante } from './../../../model/estudiante';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { EstudianteDialogoComponent } from './estudiante-dialogo/estudiante-dialogo.component';



@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})

export class EstudianteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  lista: Estudiante[] = [];
  displayedColumns: string[] = ['codigo', 'nombre', 'apellido', 'correo', 'telefono','clave','acciones'];
  private idMayor: number = 0;

  constructor(private eS: EstudianteService, private dialog: MatDialog) { }
  //eS = EstudianteService
  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.eS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.eS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EstudianteDialogoComponent);
  }
  eliminar(id: number) {
    this.eS.eliminar(id).subscribe(() => {
      this.eS.list().subscribe(data => {
        this.eS.setList(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
