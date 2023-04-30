import { Component, OnInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Aula } from 'src/app/model/aula';
import { AulaService } from 'src/app/service/aula.service';
import { MatDialog } from '@angular/material/dialog';
import { AulaDialogoComponent } from './aula-dialogo/aula-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-aula-listar',
  templateUrl: './aula-listar.component.html',
  styleUrls: ['./aula-listar.component.css']
})
export class AulaListarComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Aula> = new MatTableDataSource();
  lista: Aula[] = [];
  displayedColumns: string[] = ['Codigo', 'Seccion', 'Vacante','Acciones'];
  private idMayor: number = 0;

  constructor(private aS: AulaService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef) {
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    });
    this.aS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(AulaDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.eliminar(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);/* se ejecuta la línea 28 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
