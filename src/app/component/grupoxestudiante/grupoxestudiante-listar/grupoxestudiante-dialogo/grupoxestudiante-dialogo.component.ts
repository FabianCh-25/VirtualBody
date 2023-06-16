import { Component, OnInit } from '@angular/core';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grupoxestudiante-dialogo',
  templateUrl: './grupoxestudiante-dialogo.component.html',
  styleUrls: ['./grupoxestudiante-dialogo.component.css']
})
export class GrupoxestudianteDialogoComponent implements OnInit{
  constructor(private gxeS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
    this.gxeS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
