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
<<<<<<< HEAD
  constructor(private gS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
=======
  constructor(private gxeS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
  constructor(private gxeS:GrupoxestudianteService, private dialogRef: MatDialogRef<GrupoxestudianteDialogoComponent>){}
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
<<<<<<< HEAD
<<<<<<< HEAD
    this.gS.setConfirmaEliminacion(estado);
=======
    this.gxeS.setConfirmaEliminacion(estado);
>>>>>>> 1d22189 (algunos errores en mi rama)
=======
    this.gxeS.setConfirmaEliminacion(estado);
>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
    this.dialogRef.close();
  }
}
