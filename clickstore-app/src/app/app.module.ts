import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { UtilidadesModule}          from './Utilidades/utilidades.module';
import { AdministracionModule}      from './administracion/administracion.module';
import{ModulosExternosComponent}    from './Paginas/modulos-externos/modulos-externos.component';
import { VistaBootstrapComponent } from './Paginas/vista-bootstrap/vista-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,ModulosExternosComponent, VistaBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
