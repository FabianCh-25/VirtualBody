import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog'
import { GrupoxEstudiante } from 'src/app/model/grupoxestudiante';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';

@Component({
  selector: 'app-grupoxestudiante-listar',
  templateUrl: './grupoxestudiante-listar.component.html',
  styleUrls: ['./grupoxestudiante-listar.component.css']
})

export class GrupoxestudianteListarComponent implements OnInit {
  lista: GrupoxEstudiante[] = [];
  dataSource: MatTableDataSource<GrupoxEstudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'group', 'student', 'fecha']


  constructor(private gS: GrupoxestudianteService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.gS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.gS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
