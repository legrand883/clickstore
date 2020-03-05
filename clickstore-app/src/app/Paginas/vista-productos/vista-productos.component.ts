import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.scss']
})
export class VistaProductosComponent implements OnInit {

  public pestana: any[]=
  [{
    identificador: 'comentarios',
    titulo:'comentarios de usuarios'
  },
{
  identificador: 'detalles',
  titulo: 'detalles y caracteristicas del producto'
},
{
  identificador: 'similares',
  titulo:'lo mas buscado'
}]

  public identificador:string='comentarios';

  constructor() { }

  ngOnInit(): void {
  }

}
