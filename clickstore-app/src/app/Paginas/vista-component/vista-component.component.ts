import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Modelos/articulo'
@Component({
  selector: 'app-vista-component',
  templateUrl: './vista-component.component.html',
  styleUrls: ['./vista-component.component.scss']
})
export class VistaComponentComponent implements OnInit {

  public articulo:Articulo =
  {
    nombre:'Refresco',
    precio: 11,
    descripcion: 'Liquido'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
