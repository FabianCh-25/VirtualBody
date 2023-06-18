import { LoginService } from './../../../service/login.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DetalleMatricula } from 'src/app/model/detalleMatricula';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { DetalleMatriculaService } from 'src/app/service/detalle-matricula.service';
import { DetalleMatriculaDialogoComponent } from './detalle-matricula-dialogo/detalle-matricula-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-detalle-matricula-listar',
  templateUrl: './detalle-matricula-listar.component.html',
  styleUrls: ['./detalle-matricula-listar.component.css']
})
export class DetalleMatriculaListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  lista: DetalleMatricula[] = [];
  dataSource: MatTableDataSource<DetalleMatricula> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fechaInscripcion', 'matricula', 'docente', 'aula', 'curso', 'acciones']
  private idMayor: number = 0;
  role: string = "";

  constructor(private ls: LoginService, private mS: DetalleMatriculaService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
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

    this.mS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.mS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.mS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DetalleMatriculaDialogoComponent);
  }
  eliminar(id: number) {
    this.mS.eliminar(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.mS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
