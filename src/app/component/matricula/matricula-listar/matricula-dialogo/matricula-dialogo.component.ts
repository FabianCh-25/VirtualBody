import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatriculaService } from 'src/app/service/matricula.service';

@Component({
  selector: 'app-matricula-dialogo',
  templateUrl: './matricula-dialogo.component.html',
  styleUrls: ['./matricula-dialogo.component.css']
})
export class MatriculaDialogoComponent implements OnInit{
  constructor(private maS:MatriculaService, private dialogRef: MatDialogRef<MatriculaDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
    this.maS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
