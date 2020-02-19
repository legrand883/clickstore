import { Component, OnInit, Input } from '@angular/core';
import {Articulo} from '../../Modelos/articulo'

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit 
{ 
  public clase_coloreado:string='';

  @Input() public articulo: Articulo =
  {
    precio: 12,
    nombre: 'Articulo',
    descripcion: 'Esta es la descripcion'
   }

  constructor() { }

  ngOnInit(): void {
  }

  public addImporte(importe:number)
  {
    console.log(importe);
  }

  colorear(event:boolean)
  {
    if (event)
    this.clase_coloreado = 'colorear_border';
  }
}
