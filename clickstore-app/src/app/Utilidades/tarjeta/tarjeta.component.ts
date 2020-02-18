import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../Modelos/articulo'

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit 
{ 
  public articulo: Articulo =
  {
    precio: 12,
    nombre: 'Articulo',
    descripcion: 'Esta es la descripcion'
   }

  constructor() { }

  ngOnInit(): void {
  }

}
