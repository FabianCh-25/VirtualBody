import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DocenteComponent } from './component/docente/docente.component';
import { DocenteListarComponent } from './component/docente/docente-listar/docente-listar.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DocenteDialogoComponent } from './component/docente/docente-listar/docente-dialogo/docente-dialogo.component';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { DetalleMatriculaComponent } from './component/detalle-matricula/detalle-matricula.component';
import { DetalleMatriculaListarComponent } from './component/detalle-matricula/detalle-matricula-listar/detalle-matricula-listar.component';
import { DetalleMatriculaInsertarComponent } from './component/detalle-matricula/detalle-matricula-insertar/detalle-matricula-insertar.component';
import { DetalleMatriculaDialogoComponent } from './component/detalle-matricula/detalle-matricula-listar/detalle-matricula-dialogo/detalle-matricula-dialogo.component';
@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    DocenteListarComponent,
    DocenteInsertarComponent,
    DocenteDialogoComponent,
    DetalleMatriculaComponent,
    DetalleMatriculaListarComponent,
    DetalleMatriculaInsertarComponent,
    DetalleMatriculaDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
