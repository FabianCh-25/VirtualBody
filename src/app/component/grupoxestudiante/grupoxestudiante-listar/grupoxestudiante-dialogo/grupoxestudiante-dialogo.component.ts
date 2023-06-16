import { Component, OnInit } from '@angular/core';
import { GrupoxestudianteService } from 'src/app/service/grupoxestudiante.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grupoxestudiante-dialogo',
  templateUrl: './grupoxestudiante-dialogo.component.html',
  styleUrls: ['./grupoxestudiante-dialogo.component.css']
})
export class GrupoxestudianteDialogoComponent implements OnInit{
<<<<<<< HEAD
  constructor(private gS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
=======
  constructor(private gxeS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
>>>>>>> 1d22189 (algunos errores en mi rama)
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
<<<<<<< HEAD
    this.gS.setConfirmaEliminacion(estado);
=======
    this.gxeS.setConfirmaEliminacion(estado);
>>>>>>> 1d22189 (algunos errores en mi rama)
    this.dialogRef.close();
  }
}
