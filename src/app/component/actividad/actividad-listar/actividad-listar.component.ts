import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit{
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  lista: Actividad[]=[];
  displayedColumns: string[] =['id','Titulo','Descripcion','FechaPublicacion','FechaEntrega','Acciones'];

  constructor(private aS: ActividadService){}
  //aS = Actividad Service
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
  });


  this.aS.getActividad().subscribe(data =>{
    this.dataSource=new MatTableDataSource(data);
  })
}


  filtrar (e:any){
    this.dataSource.filter=e.target.value.trim();
  }


}
