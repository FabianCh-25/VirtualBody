import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './component/cursos/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './component/cursos/listar-cursos/listar-cursos.component';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditarCursosComponent } from './component/cursos/editar-cursos/editar-cursos.component';


const routes: Routes = [
  { path: 'crear-cursos', component: CrearCursosComponent },
  { path: 'listar-cursos', component: ListarCursosComponent },
  { path: 'actividad-listar', component: ActividadListarComponent },
  { path: 'editar-cursos/:codigoCurso', component: EditarCursosComponent },
  { path: '', component: LandingPageComponent }, // Ruta para la landing page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
