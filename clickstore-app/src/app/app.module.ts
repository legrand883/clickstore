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
import { VistaComponentComponent } from './Paginas/vista-component/vista-component.component';
import { VistaCicloComponent } from './Paginas/vista-ciclo/vista-ciclo.component';
import { VistaCondicionComponent } from './Paginas/vista-condicion/vista-condicion.component';
import { VistaSwitchComponent } from './Paginas/vista-switch/vista-switch.component';
import { VistaClaseComponent } from './Paginas/vista-clase/vista-clase.component';
import { VistaEstiloComponent } from './Paginas/vista-estilo/vista-estilo.component';
import { VistaIdentificadorComponent } from './Paginas/vista-identificador/vista-identificador.component';
import { VistaAgregarUsuarioComponent } from './Paginas/vista-agregar-usuario/vista-agregar-usuario.component';
import { VistaAgregarUsuariosComponent } from './Paginas/vista-agregar-usuarios/vista-agregar-usuarios.component';
import { VistaUsuariosComponent } from './Paginas/vista-usuarios/vista-usuarios.component';
import { ReactiveFormsModule} from '@angular/forms';
import { VistaLoginComponent } from './Paginas/vista-login/vista-login.component'
import { AutService} from './aut.service';
import { VistaObservadorComponent } from './Paginas/vista-observador/vista-observador.component';
import { VistaEditarUsuarioComponent } from './Paginas/vista-editar-usuario/vista-editar-usuario.component';
import { SpinnerService} from './spinner.service'
//import { BuscarPipe } from './pipes/buscar.pipe'

@NgModule({
  declarations: [
    AppComponent,ModulosExternosComponent, VistaBootstrapComponent, 
    VistaComponentComponent, VistaCicloComponent, VistaCondicionComponent, 
    VistaSwitchComponent, VistaClaseComponent, VistaEstiloComponent, 
    VistaIdentificadorComponent, VistaAgregarUsuarioComponent, VistaAgregarUsuariosComponent, 
    VistaUsuariosComponent,VistaLoginComponent, VistaObservadorComponent, VistaEditarUsuarioComponent //, BuscarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule,
    AdministracionModule,
    ModalModule.forRoot(),
    ProductosModule,
    ReactiveFormsModule
  ],
  providers: [AutService,SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
