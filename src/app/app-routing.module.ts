import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './component/cursos/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './component/cursos/listar-cursos/listar-cursos.component';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';
import { AulaListarComponent } from './component/aula/aula-listar/aula-listar.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { DocenteListarComponent } from './component/docente/docente-listar/docente-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditarCursosComponent } from './component/cursos/editar-cursos/editar-cursos.component';
import { DocenteComponent } from './component/docente/docente.component';

import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';

const routes: Routes = [
  { path: 'crear-cursos', component: CrearCursosComponent },
  { path: 'listar-cursos', component: ListarCursosComponent },
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
  { path: 'editar-cursos/:codigoCurso', component: EditarCursosComponent },
  { path: '', component: LandingPageComponent }, // Ruta para la landing pag
  {
    path: 'estudiante', component: EstudianteComponent, children: [
      { path: 'estudianteinsertar', component: EstudianteInsertarComponent },
      { path: 'edicion/:id', component: EstudianteInsertarComponent }
    ]
  },
  {
    path: 'docentes', component: DocenteComponent, children: [
      { path: 'docentesinsertar', component: DocenteInsertarComponent },
      { path: 'edicion/:id', component: DocenteInsertarComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
