import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Matricula } from 'src/app/model/matricula';
import { MatriculaService } from 'src/app/service/matricula.service';
import { MatriculaDialogoComponent } from './matricula-dialogo/matricula-dialogo.component';

@Component({
  selector: 'app-matricula-listar',
  templateUrl: './matricula-listar.component.html',
  styleUrls: ['./matricula-listar.component.css']
})
export class MatriculaListarComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Matricula> = new MatTableDataSource();
  lista: Matricula[] = []
  displayedColumns: string[] = ['id', 'estudiante', 'fechaPagoMatricula', 'costoMatricula', 'acciones']
  private idMayor: number = 0;

  constructor(private maS:MatriculaService, private dialog: MatDialog, private changeDetectorRef: ChangeDetectorRef){
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit(){
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.maS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.maS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.maS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(MatriculaDialogoComponent);
  }
  eliminar(id: number){
    this.maS.eliminar(id).subscribe(() => {
      this.maS.list().subscribe(data => {
        this.maS.setList(data);
      });
    });
  }
  filtrar(e: any){
    this.dataSource.filter = e.target.value.trim();
  }

}
