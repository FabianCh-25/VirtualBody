import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DetalleMatricula } from 'src/app/model/detalleMatricula';
import { DetalleMatriculaService } from 'src/app/service/detalle-matricula.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})
export class Reporte02Component implements OnInit{
  dataSource: MatTableDataSource<DetalleMatricula> = new MatTableDataSource();
  lista: DetalleMatricula[] = [];
  form: FormGroup = new FormGroup({});
  fechaInicio:Date = new Date();
  fechaFin:Date = new Date();
  displayedColumns: string[] = ['id', 'fechaInscripcion', 'docente', 'aula', 'curso', 'matricula'];

  constructor(private dmS:DetalleMatriculaService, private dialog: MatDialog){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dmS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.form = new FormGroup({
      fechaI: new FormControl(),
      fechaF: new FormControl()
    });
  }

  buscar(): void{
    this.fechaInicio = new Date(this.form.value['fechaInicio']);
    this.fechaFin = new Date(this.form.value['fechaFin']);
    this.dmS.buscarPorFechas(this.fechaInicio, this.fechaFin).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
