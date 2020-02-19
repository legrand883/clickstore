import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Modelos';

@Component({
  selector: 'app-vista-ciclo',
  templateUrl: './vista-ciclo.component.html',
  styleUrls: ['./vista-ciclo.component.scss']
})
export class VistaCicloComponent implements OnInit {

  articulosss: Articulo[]=
  [
    {
      nombre:"Refresco",
      descripcion: 'liquido',
      precio: 3
    },
    {
      nombre:"Hamburguesa",
      descripcion: 'se me ontojo',
      precio: 7
    },
    {
      nombre:"casco",
      descripcion: 'protección',
      precio: 11
    },
    {
      nombre:"guantes",
      descripcion: 'frio',
      precio: 21
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
