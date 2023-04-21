import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './component/docente/docente.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';

const routes: Routes = [
  {
    path: 'docentes',
    component:DocenteComponent,
    children: [
      { path: 'docentesinsertar',component: DocenteInsertarComponent},
      { path:'edicion/:id',component:DocenteInsertarComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
