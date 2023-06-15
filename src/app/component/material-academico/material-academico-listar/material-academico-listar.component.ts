import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialAcademico } from 'src/app/model/materialAcademico';
import { MaterialAcademicoService } from 'src/app/service/material-academico.service';
import { MaterialAcademicoDialogoComponent } from './material-academico-dialogo/material-academico-dialogo.component';

@Component({
  selector: 'app-material-academico-listar',
  templateUrl: './material-academico-listar.component.html',
  styleUrls: ['./material-academico-listar.component.css']
})
export class MaterialAcademicoListarComponent implements OnInit{
  lista: MaterialAcademico[] = [];
  dataSource: MatTableDataSource<MaterialAcademico> = new MatTableDataSource();
  displayedColumns: string[] = ['idmaterialacademico', 'titulomaterial', 'descripcion', 'urlarchivo', 'curso', 'acciones']
  private idMayor: number = 0;

  constructor(private mtS: MaterialAcademicoService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.mtS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })
    this.mtS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.mtS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(MaterialAcademicoDialogoComponent);
  }
  eliminar(id: number) {
    this.mtS.eliminar(id).subscribe(() => {
      this.mtS.list().subscribe(data => {
        this.mtS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
