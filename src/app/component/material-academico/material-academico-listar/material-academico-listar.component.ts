import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialAcademico } from 'src/app/model/materialAcademico';
import { MaterialAcademicoService } from 'src/app/service/material-academico.service';
import { MaterialAcademicoDialogoComponent } from './material-academico-dialogo/material-academico-dialogo.component';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-material-academico-listar',
  templateUrl: './material-academico-listar.component.html',
  styleUrls: ['./material-academico-listar.component.css']
})
export class MaterialAcademicoListarComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  role:string="";

  lista: MaterialAcademico[] = [];
  dataSource: MatTableDataSource<MaterialAcademico> = new MatTableDataSource();
  displayedColumns: string[] = ['idmaterialacademico', 'titulomaterial', 'descripcion', 'urlarchivo', 'curso', 'acciones']
  private idMayor: number = 0;

  constructor(private ls:LoginService,private mtS: MaterialAcademicoService, private dialog:MatDialog, private changeDetectorRef: ChangeDetectorRef){
    this.paginator = new MatPaginator(new MatPaginatorIntl(), this.changeDetectorRef);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.mtS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.mtS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.mtS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
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
