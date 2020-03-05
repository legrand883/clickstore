import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { DetallesComponent } from './detalles/detalles.component';
import { SimilaresComponent } from './similares/similares.component';



@NgModule({
  declarations: [CatalogoProductosComponent, ComentariosComponent, DetallesComponent, SimilaresComponent],
  imports: [
    CommonModule
  ],
  exports:[CatalogoProductosComponent,ComentariosComponent, DetallesComponent, SimilaresComponent]
})
export class ProductosModule { }
