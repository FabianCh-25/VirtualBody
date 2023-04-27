import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from 'src/app/service/actividad.service';
import { MatDialog } from '@angular/material/dialog'
import { ActividadDialogoComponent } from './actividad-dialogo/actividad-dialogo.component';
@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit{
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  lista: Actividad[]=[];
  displayedColumns: string[] =['id','Titulo','Descripcion','FechaPublicacion','FechaEntrega','Acciones'];
  private idMayor: number = 0;

  constructor(private aS: ActividadService , private dialog: MatDialog){}
  //aS = Actividad Service
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
  });


  this.aS.getActividad().subscribe(data =>{
    this.dataSource=new MatTableDataSource(data);
  })
  this.aS.getConfirmaEliminacion().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  });
}


  filtrar (e:any){
    this.dataSource.filter=e.target.value.trim();
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ActividadDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.eliminar(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);/* se ejecuta la línea  */
      });
    });
  }

}
