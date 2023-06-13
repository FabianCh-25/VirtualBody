import { Component, OnInit } from '@angular/core';
import { EstudiantexActividadService } from 'src/app/service/estudiantex-actividad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exa-dialogo',
  templateUrl: './exa-dialogo.component.html',
  styleUrls: ['./exa-dialogo.component.css']
})
export class ExaDialogoComponent implements OnInit{
  constructor(private exS:EstudiantexActividadService, private dialogRef: MatDialogRef<ExaDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
    this.exS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
