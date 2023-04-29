import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Docente } from 'src/app/model/docentes';
import { MatTableDataSource } from '@angular/material/table';
import { DocenteService } from 'src/app/service/docente.service';
import { MatDialog } from '@angular/material/dialog';
import { DocenteDialogoComponent } from './docente-dialogo/docente-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-docente-listar',
  templateUrl: './docente-listar.component.html',
  styleUrls: ['./docente-listar.component.css']
})
export class DocenteListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Docente> = new MatTableDataSource();
  lista: Docente[] = []
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'correo', 'clave', 'telefono', 'acciones']
  private idMayor: number = 0;
  constructor(private dS: DocenteService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.dS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.dS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.dS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DocenteDialogoComponent);
  }
  eliminar(id: number) {
    this.dS.eliminar(id).subscribe(() => {
      this.dS.list().subscribe(data => {
        this.dS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
