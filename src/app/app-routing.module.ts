import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulaComponent } from './component/aula/aula.component';
import { AulaEliminarComponent } from './component/aula/aula-eliminar/aula-eliminar.component';
import { AulaInsertarComponent } from './component/aula/aula-insertar/aula-insertar.component';

const routes: Routes = [{
  path: 'aula', component: AulaComponent, children: [
    { path: 'aulainsertar', component: AulaInsertarComponent },
    { path: 'edicion/:id', component: AulaEliminarComponent }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
