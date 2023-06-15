import { ExaDialogoComponent } from './exa-dialogo/exa-dialogo.component';
import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { EstudianteXActividad } from 'src/app/model/estudianteXActividad';
import {  MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { EstudiantexActividadService } from 'src/app/service/estudiantex-actividad.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';


@Component({
  selector: 'app-exalistar',
  templateUrl: './exalistar.component.html',
  styleUrls: ['./exalistar.component.css']
})
export class EXAListarComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  lista: EstudianteXActividad[] = [];
  dataSource: MatTableDataSource<EstudianteXActividad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'act', 'estudiante', 'calificacion', 'acciones']
  private idMayor: number = 0;

  constructor(private eS: EstudiantexActividadService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef){
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.eS.list().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    })
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
    this.dialog.open(ExaDialogoComponent);
  }
  eliminar(id: number) {
  this.eS.eliminar(id).subscribe(() => {
    this.eS.list().subscribe(data => {
      this.eS.setList(data);/* se ejecuta la línea 27 */
    });
  });
  }
  filtrar(e: any) {
  this.dataSource.filter = e.target.value.trim();
  }

}
