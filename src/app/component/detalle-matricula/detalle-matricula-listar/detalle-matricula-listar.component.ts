import { Component, OnInit } from '@angular/core';
import { DetalleMatricula } from 'src/app/model/detalleMatricula';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { DetalleMatriculaService } from 'src/app/service/detalle-matricula.service';
import { DetalleMatriculaDialogoComponent } from './detalle-matricula-dialogo/detalle-matricula-dialogo.component';


@Component({
  selector: 'app-detalle-matricula-listar',
  templateUrl: './detalle-matricula-listar.component.html',
  styleUrls: ['./detalle-matricula-listar.component.css']
})
export class DetalleMatriculaListarComponent implements OnInit{
  lista: DetalleMatricula[] = [];
  dataSource: MatTableDataSource<DetalleMatricula> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fechaInscripcion', 'docente', 'aula', 'curso', 'acciones']
  private idMayor: number = 0;

  constructor(private mS: DetalleMatriculaService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.mS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.mS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.mS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
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
