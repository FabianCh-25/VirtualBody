import { Component, OnInit } from '@angular/core';
import { DetalleMatriculaService } from 'src/app/service/detalle-matricula.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-matricula-dialogo',
  templateUrl: './detalle-matricula-dialogo.component.html',
  styleUrls: ['./detalle-matricula-dialogo.component.css']
})
export class DetalleMatriculaDialogoComponent implements OnInit{
  constructor(private mS:DetalleMatriculaService, private dialogRef: MatDialogRef<DetalleMatriculaDialogoComponent>){}
  ngOnInit(): void {
    
  }
  confirmar(estado: boolean){
    this.mS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
