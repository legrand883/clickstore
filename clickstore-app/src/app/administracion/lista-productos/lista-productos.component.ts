import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario []= 
  [
    {
      id: '1',
      nombre:'Lorena',
      apellido:'Jimenez'
    },
    {
      id: '2',
      nombre:'Beatriz',
      apellido:'Hernandez'
    },
    {
      id: '3',
      nombre:'Jose Luis',
      apellido:'Villalobos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public borrar (id:string):void
  {
    for(let i=0; i < this.usuarios.length; i++)
    {
      if(this.usuarios[i].id == id)
        {
          this.usuarios.splice(i,1)
        }
    }
  };

}
