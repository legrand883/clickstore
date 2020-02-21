import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetaComponent } from './Utilidades/tarjeta/tarjeta.component'
import { VistaBootstrapComponent} from './Paginas/vista-bootstrap/vista-bootstrap.component'
import {VistaCicloComponent } from './Paginas/vista-ciclo/vista-ciclo.component'
import { VistaClaseComponent } from './Paginas/vista-clase/vista-clase.component'
import { VistaComponentComponent } from './Paginas/vista-component/vista-component.component'
import { VistaCondicionComponent} from './Paginas/vista-condicion/vista-condicion.component'
import { VistaEstiloComponent} from './Paginas/vista-estilo/vista-estilo.component'
import { VistaSwitchComponent } from './Paginas/vista-switch/vista-switch.component'



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
