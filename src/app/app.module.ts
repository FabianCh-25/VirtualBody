import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DocenteComponent } from './component/docente/docente.component';
import { DocenteListarComponent } from './component/docente/docente-listar/docente-listar.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { MatTableModule } from '@angular/material/table';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EstudianteDialogoComponent } from './component/estudiante/estudiante-listar/estudiante-dialogo/estudiante-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { ActividadDialogoComponent } from './component/actividad/actividad-listar/actividad-dialogo/actividad-dialogo.component';
import { CrearCursosComponent } from './component/cursos/crear-cursos/crear-cursos.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ListarCursosComponent } from './component/cursos/listar-cursos/listar-cursos.component';

import { AulaEliminarComponent } from './component/aula/aula-eliminar/aula-eliminar.component';
import { AulaDialogoComponent } from './component/aula/aula-listar/aula-dialogo/aula-dialogo.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { AulaComponent } from './component/aula/aula.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditarCursosComponent } from './component/cursos/editar-cursos/editar-cursos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocenteDialogoComponent } from './component/docente/docente-listar/docente-dialogo/docente-dialogo.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogModule } from './componentes/confirm-dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    ActividadListarComponent,
    ActividadInsertarComponent,
    ActividadDialogoComponent,
    AulaListarComponent,
    AulaComponent,
    AulaInsertarComponent,
    CrearCursosComponent,
    ListarCursosComponent,
    DocenteComponent,
    DocenteListarComponent,
    DocenteInsertarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteInsertarComponent,
    EstudianteDialogoComponent,
    NavbarComponent,
    LandingPageComponent,
    EditarCursosComponent,
    DocenteDialogoComponent,
    AulaEliminarComponent,
    AulaDialogoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
