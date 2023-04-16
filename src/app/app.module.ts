import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadListarComponent } from './component/actividad/actividad-listar/actividad-listar.component';
import { ActividadComponent } from './component/actividad/actividad.component';
import { MatTableModule } from '@angular/material/table';
import { ActividadInsertarComponent } from './component/actividad/actividad-insertar/actividad-insertar.component';
@NgModule({
  declarations: [
    AppComponent,
    ActividadListarComponent,
    ActividadComponent,
    ActividadInsertarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
