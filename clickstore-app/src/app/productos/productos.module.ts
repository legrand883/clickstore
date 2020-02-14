import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';



@NgModule({
  declarations: [CatalogoProductosComponent],
  imports: [
    CommonModule
  ],
  exports:[CatalogoProductosComponent]
})
export class ProductosModule { }
