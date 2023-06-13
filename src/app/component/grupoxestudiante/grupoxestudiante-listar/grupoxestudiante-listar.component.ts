<<<<<<< HEAD
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b5c7d8e (ultimos cambios)
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
<<<<<<< HEAD
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { GrupoxestudianteDialogoComponent } from './grupoxestudiante-dialogo/grupoxestudiante-dialogo.component';
import { LoginService } from 'src/app/service/login.service';
=======
import { GrupoService } from 'src/app/service/grupo.service';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
>>>>>>> b5c7d8e (ultimos cambios)

@Component({
  selector: 'app-grupoxestudiante-listar',
  templateUrl: './grupoxestudiante-listar.component.html',
  styleUrls: ['./grupoxestudiante-listar.component.css']
})

export class GrupoxestudianteListarComponent implements OnInit {
<<<<<<< HEAD
  @ViewChild(MatPaginator) paginator: MatPaginator;
  role:string="";

  lista: GrupoxEstudiante[] = [];
  dataSource: MatTableDataSource<GrupoxEstudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id',  'fecha', 'grupo', 'estudiante', 'acciones']
  private idMayor: number = 0;

  constructor(private ls:LoginService,private gS: GrupoxestudianteService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);


    this.gS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.gS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(GrupoxestudianteDialogoComponent);
  }
  eliminar(id: number) {
    this.gS.eliminar(id).subscribe(() => {
      this.gS.list().subscribe(data => {
        this.gS.setList(data);/* se ejecuta la línea 27 */
      });
    });
=======
  lista: GrupoxEstudiante[] = [];
  dataSource: MatTableDataSource<GrupoxEstudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'group', 'student', 'fecha']


  constructor(private gS: GrupoxestudianteService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.gS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

>>>>>>> b5c7d8e (ultimos cambios)
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
