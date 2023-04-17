import { NgModule } from '@angular/core';
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
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';

const routes: Routes = [
  { path: 'crear-cursos', component: CrearCursosComponent },
  { path: 'listar-cursos', component: ListarCursosComponent },
  { path: 'actividad-insertar', component: ActividadInsertarComponent },
  { path: 'actividad-listar', component: ActividadListarComponent },
  { path: 'aula-insertar', component: AulaInsertarComponent },
  { path: 'aula-listar', component: AulaListarComponent },
  { path: 'docente-insertar', component: DocenteInsertarComponent },
  { path: 'docente-listar', component: DocenteListarComponent },
  { path: 'estudiante-insertar', component: EstudianteInsertarComponent },
  { path: 'estudiante-listar', component: EstudianteListarComponent },
  { path: '', redirectTo: '/listar-curso', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
