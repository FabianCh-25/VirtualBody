import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialAcademicoService } from 'src/app/service/material-academico.service';

@Component({
  selector: 'app-material-academico-dialogo',
  templateUrl: './material-academico-dialogo.component.html',
  styleUrls: ['./material-academico-dialogo.component.css']
})
export class MaterialAcademicoDialogoComponent implements OnInit{
  constructor(private mtS:MaterialAcademicoService, private dialogRef: MatDialogRef<MaterialAcademicoDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado: boolean){
    this.mtS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
