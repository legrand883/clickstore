import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import {UtilidadesModule} from '../Utilidades/utilidades.module'

@NgModule({
  declarations: [AgregarUsuarioComponent],
  imports: [CommonModule, UtilidadesModule],
  exports: [AgregarUsuarioComponent]
})
export class AdministracionModule { }
