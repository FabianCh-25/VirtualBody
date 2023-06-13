import { Component, OnInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { EstudianteXActividad } from 'src/app/model/estudianteXActividad';
import {  MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { EstudiantexActividadService } from 'src/app/service/estudiantex-actividad.service';



@Component({
  selector: 'app-exalistar',
  templateUrl: './exalistar.component.html',
  styleUrls: ['./exalistar.component.css']
})
export class EXAListarComponent implements OnInit{
  lista: EstudianteXActividad[] = [];
  dataSource: MatTableDataSource<EstudianteXActividad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'act', 'estudiante', 'calificacion', 'acciones']
  private idMayor: number = 0;

  constructor(private eS: EstudiantexActividadService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.eS.list().subscribe(data => {
  this.dataSource = new MatTableDataSource(data);
})
this.eS.getLista().subscribe(data => {
  this.dataSource = new MatTableDataSource(data);
});
this.eS.getConfirmaEliminacion().subscribe(data => {
  data == true ? this.eliminar(this.idMayor) : false;
});
}
confirmar(id: number) {
this.idMayor = id;
//this.dialog.open(DetalleMatriculaDialogoComponent);
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
