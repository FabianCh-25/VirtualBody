import { Component, OnInit } from '@angular/core';
import { AulaService } from 'src/app/service/aula.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aula-dialogo',
  templateUrl: './aula-dialogo.component.html',
  styleUrls: ['./aula-dialogo.component.css']
})
export class AulaDialogoComponent implements OnInit{
  constructor(private aS: AulaService,
  private dialogRef: MatDialogRef<AulaDialogoComponent>){  }
  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.aS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
