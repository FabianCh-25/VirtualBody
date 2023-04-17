import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './component/cursos/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './component/cursos/listar-cursos/listar-cursos.component';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';

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
