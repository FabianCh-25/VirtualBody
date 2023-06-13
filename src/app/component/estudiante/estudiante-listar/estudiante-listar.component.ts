import { LoginService } from './../../../service/login.service';
import { EstudianteService } from './../../../service/estudiante.service';
import { Estudiante } from './../../../model/estudiante';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { EstudianteDialogoComponent } from './estudiante-dialogo/estudiante-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';


@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})

export class EstudianteListarComponent implements OnInit {
<<<<<<< HEAD
=======
  lista: Estudiante[] = [];
>>>>>>> b5c7d8e (ultimos cambios)
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'correo', 'telefono','clave','acciones'];
  private idMayor: number = 0;

  constructor(private ls:LoginService,private eS: EstudianteService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
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

    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.eS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.eS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

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
