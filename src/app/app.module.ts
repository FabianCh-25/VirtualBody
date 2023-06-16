import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadComponent } from './component/actividad/actividad.component';
import { MatTableModule } from '@angular/material/table';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { EstudianteDialogoComponent } from './component/estudiante/estudiante-listar/estudiante-dialogo/estudiante-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GrupoComponent } from './component/grupo/grupo.component';
import { RouterOutlet } from '@angular/router';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';
import { GrupoListarComponent } from './component/grupo/grupo-listar/grupo-listar.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { GrupoxestudianteListarComponent } from './component/grupoxestudiante/grupoxestudiante-listar/grupoxestudiante-listar.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { GrupoDialogoComponent } from './component/grupo/grupo-listar/grupo-dialogo/grupo-dialogo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GrupoxestudianteDialogoComponent } from './component/grupoxestudiante/grupoxestudiante-listar/grupoxestudiante-dialogo/grupoxestudiante-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    ActividadListarComponent,
    ActividadComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteInsertarComponent,
    EstudianteDialogoComponent,
    GrupoComponent,
    GrupoxestudianteComponent,
    GrupoListarComponent,
    GrupoInsertarComponent,
    GrupoxestudianteListarComponent,
    GrupoxestudianteInsertarComponent,
    GrupoDialogoComponent,
    GrupoxestudianteDialogoComponent
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
    RouterOutlet,
    MatFormFieldModule,
    BrowserModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
