import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetaComponent } from './Utilidades/tarjeta/tarjeta.component'
import { VistaBootstrapComponent} from './Paginas/vista-bootstrap/vista-bootstrap.component'
import { VistaCicloComponent } from './Paginas/vista-ciclo/vista-ciclo.component'
import { VistaClaseComponent } from './Paginas/vista-clase/vista-clase.component'
import { VistaComponentComponent } from './Paginas/vista-component/vista-component.component'
import { VistaCondicionComponent} from './Paginas/vista-condicion/vista-condicion.component'
import { VistaEstiloComponent} from './Paginas/vista-estilo/vista-estilo.component'
import { VistaSwitchComponent } from './Paginas/vista-switch/vista-switch.component'
import { VistaIdentificadorComponent } from './Paginas/vista-identificador/vista-identificador.component'
import { VistaAgregarUsuarioComponent} from './Paginas/vista-agregar-usuario/vista-agregar-usuario.component'
import { VistaUsuariosComponent} from './Paginas/vista-usuarios/vista-usuarios.component'
import { VistaLoginComponent } from './Paginas/vista-login/vista-login.component'
import { VistaObservadorComponent } from './Paginas/vista-observador/vista-observador.component'

const routes: Routes = [
  {
    path:'componentes/componentes',
    component:TarjetaComponent
  },
  {
    path:'modulos/bootstrap',
    component:VistaBootstrapComponent
  },
  {
    path:'directivas/condicion',
    component:VistaCondicionComponent
  },
  {
    path:'directivas/ciclo',
    component:VistaCicloComponent
  },
  {
    path:'directivas/clase',
    component:VistaClaseComponent
  },
  {
    path:'directivas/estilo',
    component:VistaEstiloComponent
  },
  {
    path:'directivas/switch',
    component:VistaSwitchComponent
  },
  {
    path:'component',
    component:VistaComponentComponent
  },
  {
    path:'productos/:ID/:IDENTIFICADOR',
    component:VistaIdentificadorComponent
  },
  {
    path:'usuarios/agregar',
    component:VistaAgregarUsuarioComponent
  },
  {
    path:'usuarios',
    component:VistaUsuariosComponent
  },
  {
    path:'login',
    component:VistaLoginComponent
  },
  {
    path:'observador',
    component:VistaObservadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
