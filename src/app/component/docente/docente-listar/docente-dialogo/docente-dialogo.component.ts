import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DocenteService } from 'src/app/service/docente.service';

@Component({
  selector: 'app-docente-dialogo',
  templateUrl: './docente-dialogo.component.html',
  styleUrls: ['./docente-dialogo.component.css']
})
export class DocenteDialogoComponent implements OnInit{
  constructor(private dS:DocenteService, private dialogRef: MatDialogRef<DocenteDialogoComponent>){}
  ngOnInit(): void { }
  confirmar(estado:boolean){
    this.dS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
