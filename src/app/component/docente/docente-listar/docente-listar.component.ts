import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/model/docentes';
import { MatTableDataSource } from '@angular/material/table';
import { DocenteService } from 'src/app/service/docente.service';

@Component({
  selector: 'app-docente-listar',
  templateUrl: './docente-listar.component.html',
  styleUrls: ['./docente-listar.component.css']
})
export class DocenteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Docente> = new MatTableDataSource();
  lista: Docente[] = []
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'correo', 'clave', 'telefono', 'ceditar']
  constructor(private dS: DocenteService) { }
  ngOnInit(): void {
    this.dS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.dS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
