<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b5c7d8e (ultimos cambios)
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { Grupo } from 'src/app/model/grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoDialogoComponent } from './grupo-dialogo/grupo-dialogo.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';
=======
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.css']
})



export class GrupoListarComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  @ViewChild(MatPaginator) paginator: MatPaginator;
  role:string="";

  lista: Grupo[] = [];
  dataSource: MatTableDataSource<Grupo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  private idMayor: number = 0;

  constructor(private ls:LoginService,private gS: GrupoService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  //eS = EstudianteService
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.gS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
=======
  dataSource: MatTableDataSource<Grupo> = new MatTableDataSource();
=======
>>>>>>> c86e85a (estudiante y grupo solucionado)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  lista: Grupo[] = [];
  dataSource: MatTableDataSource<Grupo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  private idMayor: number = 0;

  constructor(private gS: GrupoService, private dialog: MatDialog) { }
  //eS = EstudianteService
  ngOnInit(): void {
    this.gS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
    });
    this.gS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

<<<<<<< HEAD
<<<<<<< HEAD
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

=======
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
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
