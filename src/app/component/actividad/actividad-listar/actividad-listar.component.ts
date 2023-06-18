import { LoginService } from './../../../service/login.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from 'src/app/service/actividad.service';
import { MatDialog } from '@angular/material/dialog'
import { ActividadDialogoComponent } from './actividad-dialogo/actividad-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  role: string = "";

  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  lista: Actividad[] = [];
  displayedColumns: string[] = ['id', 'Titulo', 'Descripcion', 'FechaPublicacion', 'FechaEntrega', 'Acciones'];
  private idMayor: number = 0;

  constructor(private ls: LoginService, private aS: ActividadService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {

    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);

  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);

    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.aS.getActividad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.aS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ActividadDialogoComponent);
  }

  eliminar(id: number) {
    this.aS.eliminar(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      });
    });
  }
}
