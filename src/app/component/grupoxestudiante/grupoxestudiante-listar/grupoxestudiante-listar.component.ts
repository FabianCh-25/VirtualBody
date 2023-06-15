import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { GrupoxestudianteDialogoComponent } from './grupoxestudiante-dialogo/grupoxestudiante-dialogo.component';

@Component({
  selector: 'app-grupoxestudiante-listar',
  templateUrl: './grupoxestudiante-listar.component.html',
  styleUrls: ['./grupoxestudiante-listar.component.css']
})

export class GrupoxestudianteListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
