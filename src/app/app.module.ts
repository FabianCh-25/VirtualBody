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
import { ActividadComponent } from './component/actividad/actividad.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AulaEliminarComponent } from './component/aula/aula-eliminar/aula-eliminar.component';
import { AulaDialogoComponent } from './component/aula/aula-listar/aula-dialogo/aula-dialogo.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { AulaComponent } from './component/aula/aula.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocenteDialogoComponent } from './component/docente/docente-listar/docente-dialogo/docente-dialogo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetalleMatriculaComponent } from './component/detalle-matricula/detalle-matricula.component';
import { DetalleMatriculaListarComponent } from './component/detalle-matricula/detalle-matricula-listar/detalle-matricula-listar.component';
import { DetalleMatriculaInsertarComponent } from './component/detalle-matricula/detalle-matricula-insertar/detalle-matricula-insertar.component';
import { DetalleMatriculaDialogoComponent } from './component/detalle-matricula/detalle-matricula-listar/detalle-matricula-dialogo/detalle-matricula-dialogo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogModule } from './componentes/confirm-dialog.module';
import { EstudianteXActividadComponent } from './component/estudiante-xactividad/estudiante-xactividad.component';
import { EXAListarComponent } from './component/estudiante-xactividad/exalistar/exalistar.component';
import { ExaInsertarComponent } from './component/estudiante-xactividad/exa-insertar/exa-insertar.component';
import { ExaDialogoComponent } from './component/estudiante-xactividad/exalistar/exa-dialogo/exa-dialogo.component';
import { GrupoComponent } from './component/grupo/grupo.component';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';

import { GrupoListarComponent } from './component/grupo/grupo-listar/grupo-listar.component';
import { GrupoxestudianteListarComponent } from './component/grupoxestudiante/grupoxestudiante-listar/grupoxestudiante-listar.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { GrupoDialogoComponent } from './component/grupo/grupo-listar/grupo-dialogo/grupo-dialogo.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { MatriculaComponent } from './component/matricula/matricula.component';
import { MatriculaListarComponent } from './component/matricula/matricula-listar/matricula-listar.component';
import { MatriculaInsertarComponent } from './component/matricula/matricula-insertar/matricula-insertar.component';
import { MatriculaDialogoComponent } from './component/matricula/matricula-listar/matricula-dialogo/matricula-dialogo.component';
import { CursoComponent } from './component/curso/curso.component';
import { CursoListarComponent } from './component/curso/curso-listar/curso-listar.component';
import { CursoInsertarComponent } from './component/curso/curso-insertar/curso-insertar.component';
import { CursoDialogoComponent } from './component/curso/curso-listar/curso-dialogo/curso-dialogo.component';
import { MaterialAcademicoComponent } from './component/material-academico/material-academico.component';
import { MaterialAcademicoListarComponent } from './component/material-academico/material-academico-listar/material-academico-listar.component';
import { MaterialAcademicoDialogoComponent } from './component/material-academico/material-academico-listar/material-academico-dialogo/material-academico-dialogo.component';
import { MaterialAcademicoInsertarComponent } from './component/material-academico/material-academico-insertar/material-academico-insertar.component';


@NgModule({
  declarations: [
    AppComponent,
    ActividadListarComponent,
    ActividadInsertarComponent,
    ActividadDialogoComponent,
    AulaListarComponent,
    AulaComponent,
    AulaInsertarComponent,
    DocenteComponent,
    DocenteListarComponent,
    DocenteInsertarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteInsertarComponent,
    EstudianteDialogoComponent,
    NavbarComponent,
    LandingPageComponent,
    DocenteDialogoComponent,
    AulaEliminarComponent,
    AulaDialogoComponent,
    ActividadComponent,


    DocenteDialogoComponent,
    DetalleMatriculaComponent,
    DetalleMatriculaListarComponent,
    DetalleMatriculaInsertarComponent,
    DetalleMatriculaDialogoComponent,
    EstudianteXActividadComponent,
    EXAListarComponent,
    ExaInsertarComponent,
    ExaDialogoComponent,
    GrupoComponent,
    GrupoxestudianteComponent,

    GrupoInsertarComponent,
    GrupoListarComponent,
    GrupoxestudianteListarComponent,
    GrupoxestudianteInsertarComponent,
    GrupoDialogoComponent,
    MatriculaComponent,
    MatriculaListarComponent,
    MatriculaInsertarComponent,
    MatriculaDialogoComponent,
    CursoComponent,
    CursoListarComponent,
    CursoInsertarComponent,
    CursoDialogoComponent,
    MaterialAcademicoComponent,
    MaterialAcademicoListarComponent,
    MaterialAcademicoDialogoComponent,
    MaterialAcademicoInsertarComponent,




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
