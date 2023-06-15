import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-curso-dialogo',
  templateUrl: './curso-dialogo.component.html',
  styleUrls: ['./curso-dialogo.component.css']
})
export class CursoDialogoComponent implements OnInit{
  constructor(private cS:CursosService, private dialogRef:MatDialogRef<CursoDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
    this.cS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
