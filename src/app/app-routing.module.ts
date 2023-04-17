import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
import { ActividadComponent } from './component/actividad/actividad.component';

const routes: Routes = [
  { path: 'crear-cursos', component: CrearCursosComponent },
  { path: 'listar-cursos', component: ListarCursosComponent },
  { path: 'actividad-listar', component: ActividadListarComponent },
  { path: '', redirectTo: '/listar-curso', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
