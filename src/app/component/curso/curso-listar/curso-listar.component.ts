import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/model/curso';
import { CursosService } from 'src/app/service/cursos.service';
import { CursoDialogoComponent } from './curso-dialogo/curso-dialogo.component';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource();
  lista: Curso[] = []
  displayedColumns: string[] = ['id', 'codeCurso', 'nameCurso', 'description', 'acciones']
  private idMayor: number = 0;
  constructor(private cS: CursosService, private dialog:MatDialog, private changeDetectorRef: ChangeDetectorRef){
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit(){
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.cS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }

  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(CursoDialogoComponent);
  }
  eliminar(id: number){
    this.cS.eliminar(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);
      });
    });
  }
  filtrar(e: any){
    this.dataSource.filter = e.target.value.trim();
  }

}
