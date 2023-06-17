import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { DocenteListarComponent } from './component/docente/docente-listar/docente-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocenteComponent } from './component/docente/docente.component';

import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';

import { AulaComponent } from './component/aula/aula.component';
import { AulaEliminarComponent } from './component/aula/aula-eliminar/aula-eliminar.component';
import { ActividadComponent } from './component/actividad/actividad.component';
import { DetalleMatriculaComponent } from './component/detalle-matricula/detalle-matricula.component';
import { DetalleMatriculaInsertarComponent } from './component/detalle-matricula/detalle-matricula-insertar/detalle-matricula-insertar.component';
import { EstudianteXActividadComponent } from './component/estudiante-xactividad/estudiante-xactividad.component';
import { ExaInsertarComponent } from './component/estudiante-xactividad/exa-insertar/exa-insertar.component';
import { GrupoComponent } from './component/grupo/grupo.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { MatriculaComponent } from './component/matricula/matricula.component';
import { MatriculaInsertarComponent } from './component/matricula/matricula-insertar/matricula-insertar.component';
import { CursoComponent } from './component/curso/curso.component';
import { CursoInsertarComponent } from './component/curso/curso-insertar/curso-insertar.component';
import { MaterialAcademicoComponent } from './component/material-academico/material-academico.component';
import { MaterialAcademicoInsertarComponent } from './component/material-academico/material-academico-insertar/material-academico-insertar.component';
import { SignupComponent } from './component/signup/signup.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  { path: 'actividad-insertar', component: ActividadInsertarComponent },
  { path: 'actividad-listar', component: ActividadListarComponent },
  {path: 'actividades/edicion/:id', component:ActividadInsertarComponent},
  { path: 'aula-insertar', component: AulaInsertarComponent },
  { path: 'aula-listar', component: AulaListarComponent },
  { path: 'docente-insertar', component: DocenteInsertarComponent },
  { path: 'edicion/:id',component:DocenteInsertarComponent},
  { path: 'docente-listar', component: DocenteListarComponent },
  { path: 'estudiante-insertar', component: EstudianteInsertarComponent },
  { path: 'estudiante-listar', component: EstudianteListarComponent },
  { path: 'estudiante/edicion/:id', component: EstudianteInsertarComponent },
  { path: '', component: LandingPageComponent }, // Ruta para la landing pag

  {
    path: 'docentes', component: DocenteComponent, children: [
      { path: 'docentesinsertar', component: DocenteInsertarComponent },
      { path: 'edicion/:id', component: DocenteInsertarComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'aula', component: AulaComponent, children: [
      { path: 'aulainsertar', component: AulaInsertarComponent },
      { path: 'edicion/:id', component: AulaEliminarComponent }]
  },
  {
    path: 'actividades', component: ActividadComponent, children: [
      { path: 'actividad-insertar', component: ActividadInsertarComponent },
      { path: 'edicion/:id', component: ActividadInsertarComponent }]
  },
  {
    path: 'detalleMatricula',
    component: DetalleMatriculaComponent,
    children: [
      { path: 'nuevo', component:DetalleMatriculaInsertarComponent},
      { path: 'edicionMatricula/:id', component:DetalleMatriculaInsertarComponent}
    ]
  },
  {
    path: 'materialAcademico',
    component: MaterialAcademicoComponent,
    children: [
      { path: 'nuevo', component: MaterialAcademicoInsertarComponent},
      { path: 'edicionMaterial/:id', component: MaterialAcademicoInsertarComponent}
    ]
  },
  {
    path: 'cursos',
    component: CursoComponent,
    children: [
      { path: 'nuevo', component: CursoInsertarComponent},
      { path: 'edicion/:id', component: CursoInsertarComponent}
    ]
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
    children: [
      {path: 'nuevo', component:MatriculaInsertarComponent},
      {path: 'edicion/:id', component:MatriculaInsertarComponent}
    ]
  },
  {
    path: 'ExAs',
    component: EstudianteXActividadComponent,
    children: [
      { path: 'nuevo', component:ExaInsertarComponent},
      { path: 'edicion/:id', component:ExaInsertarComponent}
    ]
  },


  {
    path: 'estudiante', component: EstudianteComponent, children: [
      { path: 'estudianteinsertar', component: EstudianteInsertarComponent },
      { path: 'edicion/:id', component: EstudianteInsertarComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'grupo', component: GrupoComponent, children: [
      { path: 'grupoinsertar', component: GrupoInsertarComponent },
      { path: 'edicion/:id', component: GrupoInsertarComponent }
    ]
  },
  {
    path: 'grupoxestudiante', component: GrupoxestudianteComponent, children: [
    { path: 'nuevo', component: GrupoxestudianteInsertarComponent },
    { path: 'edicion/:id', component: GrupoxestudianteInsertarComponent}
    ]
  },
  {path:'signin',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
