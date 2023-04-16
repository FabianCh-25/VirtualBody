import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './component/actividad/actividad.component';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';

const routes: Routes = [
{path: 'actividades',
component: ActividadComponent,
children:[
  {
    path: 'actividadinsertar',
    component: ActividadInsertarComponent,
  },
],

}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
