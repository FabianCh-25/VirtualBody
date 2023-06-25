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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> b5c7d8e (ultimos cambios)
=======

>>>>>>> 1d22189b09e92d3ecda9a0b45f50fa3afc9cf7ab
