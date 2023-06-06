import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './component/docente/docente.component';
import { DocenteInsertarComponent } from './component/docente/docente-insertar/docente-insertar.component';
import { DetalleMatriculaComponent } from './component/detalle-matricula/detalle-matricula.component';
import { DetalleMatriculaInsertarComponent } from './component/detalle-matricula/detalle-matricula-insertar/detalle-matricula-insertar.component';

const routes: Routes = [
  {
    path: 'docentes',
    component:DocenteComponent,
    children: [
      { path: 'docentesinsertar',component: DocenteInsertarComponent},
      { path:'edicion/:id',component:DocenteInsertarComponent}
    ],
  },
  {
    path: 'detalleMatricula',
    component: DetalleMatriculaComponent,
    children: [
      { path: 'nuevo', component:DetalleMatriculaInsertarComponent},
      { path: 'edicionMatricula/:id', component:DetalleMatriculaInsertarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
