import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { Grupo } from 'src/app/model/grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoDialogoComponent } from './grupo-dialogo/grupo-dialogo.component';

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.css']
})



export class GrupoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Grupo> = new MatTableDataSource();
  lista: Grupo[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  private idMayor: number = 0;

  constructor(private gS: GrupoService, private dialog: MatDialog) { }
  //eS = EstudianteService
  ngOnInit(): void {
    this.gS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(GrupoDialogoComponent);
  }
  eliminar(id: number) {
    this.gS.eliminar(id).subscribe(() => {
      this.gS.list().subscribe(data => {
        this.gS.setList(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
