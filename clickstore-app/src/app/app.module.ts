import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { UtilidadesModule}          from './Utilidades/utilidades.module';
import { AdministracionModule}      from './administracion/administracion.module';
import { ModulosExternosComponent}    from './Paginas/modulos-externos/modulos-externos.component';
import { VistaBootstrapComponent } from './Paginas/vista-bootstrap/vista-bootstrap.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductosModule } from './productos/productos.module';
import { VistaComponentComponent } from './paginas/vista-component/vista-component.component';
import { VistaCicloComponent } from './paginas/vista-ciclo/vista-ciclo.component';
import { VistaCondicionComponent } from './paginas/vista-condicion/vista-condicion.component';
import { VistaSwitchComponent } from './paginas/vista-switch/vista-switch.component';
import { VistaClaseComponent } from './paginas/vista-clase/vista-clase.component';
import { VistaEstiloComponent } from './paginas/vista-estilo/vista-estilo.component'

@NgModule({
  declarations: [
    AppComponent,ModulosExternosComponent, VistaBootstrapComponent, VistaComponentComponent, VistaCicloComponent, VistaCondicionComponent, VistaSwitchComponent, VistaClaseComponent, VistaEstiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule,
    ModalModule.forRoot(),
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
