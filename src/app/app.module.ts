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
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';
import { FormsModule } from '@angular/forms';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { AulaComponent } from './component/aula/aula.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';

@NgModule({
  declarations: [
    AppComponent,
    ActividadListarComponent,
    AulaListarComponent,
    AulaComponent,
    AulaInsertarComponent,
    CrearCursosComponent,
    ListarCursosComponent,
    NavbarComponent,
    ActividadInsertarComponent,
    DocenteComponent,
    DocenteListarComponent,
    DocenteInsertarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteInsertarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
