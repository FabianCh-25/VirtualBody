import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { GrupoInsertarComponent } from './component/grupo/grupo-insertar/grupo-insertar.component';
import { GrupoxestudianteInsertarComponent } from './component/grupoxestudiante/grupoxestudiante-insertar/grupoxestudiante-insertar.component';
import { GrupoxestudianteComponent } from './component/grupoxestudiante/grupoxestudiante.component';
import { GrupoComponent } from './component/grupo/grupo.component';

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
      { path: 'edicion/:id', component: GrupoInsertarComponent }
    ]
  },
  {
    path: 'grupoxEstudiante', component: GrupoxestudianteComponent, children: [
    { path: 'nuevo', component: GrupoxestudianteInsertarComponent },
    { path: 'edicion/:id', component: GrupoxestudianteInsertarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
