<<<<<<< HEAD
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b5c7d8e (ultimos cambios)
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { Grupo } from 'src/app/model/grupo';
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoDialogoComponent } from './grupo-dialogo/grupo-dialogo.component';
<<<<<<< HEAD
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';
=======
>>>>>>> b5c7d8e (ultimos cambios)

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.css']
})



export class GrupoListarComponent implements OnInit {
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
>>>>>>> b5c7d8e (ultimos cambios)
    });
    this.gS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

<<<<<<< HEAD
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

=======
>>>>>>> b5c7d8e (ultimos cambios)
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
