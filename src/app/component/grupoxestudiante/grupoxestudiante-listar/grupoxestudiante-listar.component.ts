<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b5c7d8e (ultimos cambios)
=======
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
>>>>>>> b5c7d8e (ultimos cambios)
=======
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { GrupoxestudianteDialogoComponent } from './grupoxestudiante-dialogo/grupoxestudiante-dialogo.component';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
import { LoginService } from 'src/app/service/login.service';
=======
import { GrupoService } from 'src/app/service/grupo.service';
=======
>>>>>>> a227011 (falta aun grupoxest)
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
<<<<<<< HEAD
import { GrupoService } from 'src/app/service/grupo.service';
=======
>>>>>>> a227011 (falta aun grupoxest)
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
>>>>>>> b5c7d8e (ultimos cambios)
=======
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { GrupoxestudianteDialogoComponent } from './grupoxestudiante-dialogo/grupoxestudiante-dialogo.component';
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170

@Component({
  selector: 'app-grupoxestudiante-listar',
  templateUrl: './grupoxestudiante-listar.component.html',
  styleUrls: ['./grupoxestudiante-listar.component.css']
})

export class GrupoxestudianteListarComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
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
=======
  @ViewChild(MatPaginator) paginator: MatPaginator;

>>>>>>> 1d22189 (algunos errores en mi rama)
<<<<<<< HEAD
=======
=======
  @ViewChild(MatPaginator) paginator: MatPaginator;

>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
  lista: GrupoxEstudiante[] = [];
  dataSource: MatTableDataSource<GrupoxEstudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id',  'fecha', 'grupo', 'estudiante', 'acciones']
  private idMayor: number = 0;

  constructor(private gxeS: GrupoxestudianteService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.gxeS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.gxeS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.gxeS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(GrupoxestudianteDialogoComponent);
  }
  eliminar(id: number) {
    this.gxeS.eliminar(id).subscribe(() => {
      this.gxeS.list().subscribe(data => {
        this.gxeS.setList(data);/* se ejecuta la línea 27 */
      });
    });
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
=======
  @ViewChild(MatPaginator) paginator: MatPaginator;

>>>>>>> 1d22189 (algunos errores en mi rama)
  lista: GrupoxEstudiante[] = [];
  dataSource: MatTableDataSource<GrupoxEstudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id',  'fecha', 'grupo', 'estudiante', 'acciones']
  private idMayor: number = 0;

  constructor(private gxeS: GrupoxestudianteService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.gxeS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.gxeS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.gxeS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
=======
<<<<<<< HEAD
>>>>>>> b5c7d8e (ultimos cambios)
=======
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(GrupoxestudianteDialogoComponent);
  }
  eliminar(id: number) {
    this.gxeS.eliminar(id).subscribe(() => {
      this.gxeS.list().subscribe(data => {
        this.gxeS.setList(data);/* se ejecuta la línea 27 */
      });
    });
<<<<<<< HEAD
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
<<<<<<< HEAD
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
>>>>>>> 3a229d48ade690476599023d1587e67a1a0ec170
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
