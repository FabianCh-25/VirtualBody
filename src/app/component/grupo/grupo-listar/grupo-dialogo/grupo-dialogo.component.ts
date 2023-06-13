import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GrupoService } from 'src/app/service/grupo.service';
@Component({
  selector: 'app-grupo-dialogo',
  templateUrl: './grupo-dialogo.component.html',
  styleUrls: ['./grupo-dialogo.component.css']
})

export class GrupoDialogoComponent {
  constructor(private gS: GrupoService,
    private dialogRef: MatDialogRef<GrupoDialogoComponent>) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.gS.setConfirmaEliminacion(estado);
    this.dialogRef.close();

  }
}


