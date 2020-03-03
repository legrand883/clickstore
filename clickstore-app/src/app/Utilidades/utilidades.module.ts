import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';
import { ConvertirPipe } from './pipes/convertir.pipe';
import { ContarletrasPipe } from './pipes/contarletras.pipe';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [TarjetaComponent, EncabezadoComponent, CuerpoComponent, PieComponent, ConvertirPipe, ContarletrasPipe, SpinnerComponent],
  imports: [CommonModule], 
  exports: [TarjetaComponent, SpinnerComponent]
})
export class UtilidadesModule { }
