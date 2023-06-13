//import { LoginestudianteComponent } from './component/loginestudiante/loginestudiante.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { DocenteListarComponent } from './component/docente/docente-listar/docente-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';

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
import { MainsidenavComponent } from './component/sidenavs/mainsidenav/mainsidenav.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { Reporte01Component } from './component/reportes/reporte01/reporte01.component';
import { Reporte02Component } from './component/reportes/reporte02/reporte02.component';
import { LoginestudianteComponent } from './component/login/loginestudiante/loginestudiante.component';
import { LogindocenteComponent } from './component/login/logindocente/logindocente.component';
import { RegistroestudianteComponent } from './component/registro/registroestudiante/registroestudiante.component';
import { RegistrodocenteComponent } from './component/registro/registrodocente/registrodocente.component';
import { Reporte05fComponent } from './component/reportes/reporte05f/reporte05f.component';
import { Reporte06fComponent } from './component/reportes/reporte06f/reporte06f.component';

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


  {
    path: 'inicio',
    component: MainsidenavComponent,
    children:[
      {
        path: 'docentes', component: DocenteComponent, children: [
          { path: 'docentesinsertar', component: DocenteInsertarComponent },
          { path: 'edicion/:id', component: DocenteInsertarComponent }
        ],canActivate:[GuardService]
      },
      {
        path: 'aula', component: AulaComponent, children: [
          { path: 'aulainsertar', component: AulaInsertarComponent },
          { path: 'edicion/:id', component: AulaEliminarComponent }
        ],canActivate:[GuardService]
      },
      {
        path: 'actividades', component: ActividadComponent, children: [
          { path: 'actividad-insertar', component: ActividadInsertarComponent },
          { path: 'edicion/:id', component: ActividadInsertarComponent }
        ],canActivate:[GuardService]
      },
      {
        path: 'detalleMatricula',
        component: DetalleMatriculaComponent,
        children: [
          { path: 'nuevo', component:DetalleMatriculaInsertarComponent},
          { path: 'edicionMatricula/:id', component:DetalleMatriculaInsertarComponent}
        ],canActivate:[GuardService]
      },
      {
        path: 'materialAcademico',
        component: MaterialAcademicoComponent,
        children: [
          { path: 'nuevo', component: MaterialAcademicoInsertarComponent},
          { path: 'edicionMaterial/:id', component: MaterialAcademicoInsertarComponent}
        ],canActivate:[GuardService]
      },
      {
        path: 'cursos',
        component: CursoComponent,
        children: [
          { path: 'nuevo', component: CursoInsertarComponent},
          { path: 'edicion/:id', component: CursoInsertarComponent}
        ],canActivate:[GuardService]
      },
      {
        path: 'matricula',
        component: MatriculaComponent,
        children: [
          {path: 'nuevo', component:MatriculaInsertarComponent},
          {path: 'edicion/:id', component:MatriculaInsertarComponent}
        ],canActivate:[GuardService]
      },
      {
        path: 'ExAs',
        component: EstudianteXActividadComponent,
        children: [
          { path: 'nuevo', component:ExaInsertarComponent},
          { path: 'edicion/:id', component:ExaInsertarComponent}
        ],canActivate:[GuardService]
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
        ],canActivate:[GuardService]
      },
      {
        path: 'gruposxEstudiantes', component: GrupoxestudianteComponent, children: [
        { path: 'nuevo', component: GrupoxestudianteInsertarComponent },
        { path: 'edicion/:id', component: GrupoxestudianteInsertarComponent}
        ],canActivate:[GuardService]
      },
      {
        path: 'reportes', component: ReportesComponent, children: [
          {path: 'reporte01', component: Reporte01Component},
          {path: 'reporte02', component: Reporte02Component},
          {path: 'reporte05', component: Reporte05fComponent},
          {path: 'reporte06', component: Reporte06fComponent}
        ]
      }
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
  {
    path: 'loginE', component:LoginestudianteComponent
  },
  {
    path: 'RegistroE',component:RegistroestudianteComponent
  },
  {
    path: 'loginD', component:LogindocenteComponent
  },
  {
    path: 'RegistroD',component:RegistrodocenteComponent
  }




=======
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';
import { GrupoComponent } from './component/grupo/grupo.component';

=======
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';
import { GrupoComponent } from './component/grupo/grupo.component';

>>>>>>> b5c7d8e (ultimos cambios)
const routes: Routes = [
  {
    path: 'estudiante', component: EstudianteComponent, children: [
      { path: 'estudianteinsertar', component: EstudianteInsertarComponent },
      { path: 'edicion/:id', component: EstudianteInsertarComponent }
    ]
  },
  {
    path: 'grupo', component: GrupoComponent, children: [
      { path: 'grupoinsertar', component: GrupoInsertarComponent },
<<<<<<< HEAD
<<<<<<< HEAD
      { path: 'edicion/:id', component: GrupoInsertarComponent }
    ]
  },
  {
    path: 'grupoxEstudiante', component: GrupoxestudianteComponent, children: [
    { path: 'nuevo', component: GrupoxestudianteInsertarComponent },
    { path: 'edicion/:id', component: GrupoxestudianteInsertarComponent}
    ]
  }
>>>>>>> b5c7d8e (ultimos cambios)
=======
      { path: 'edicion/:idGrupo', component: GrupoInsertarComponent }
=======
      { path: 'edicion/:id', component: GrupoInsertarComponent }
>>>>>>> c86e85a (estudiante y grupo solucionado)
    ]
  },
  {
    path: 'grupoxestudiante', component: GrupoxestudianteComponent, children: [
    { path: 'grupoxestudianteinsertar', component: GrupoxestudianteInsertarComponent },
    ]
  }
>>>>>>> b5c7d8e (ultimos cambios)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
