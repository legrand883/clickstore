import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'clickstore-app';

  ngOnInit()
{

  let nombre 		     = "Emmanuel";
  let nombre2:string = "Emmanuel 2";
  let nombre3:string = 'Emmanuel 3';

  let booleano: boolean = true;
  let nombre4:  any     = 'Emmanuel 4'
  let nombre5:  string | number = 3;

  let objeto1: any = {
  	  nombre  : "Emmanuel",
  	  apellido: "Villalobos"
  	  }

  let objeto2 = {
  	  nombre  :"Emmanuel",
  	  apellido:"Villalobos"
  	  }

  var resultado = document.getElementById("Resultado");
  resultado.innerHTML = objeto1.nombre;

  resultado.innerHTML = objeto2['nombre'];

  let atributo: string = "apellido";
  resultado.innerHTML = objeto1[atributo];

  let nulo: string = null;

  let fecha: Date = new Date();

  let arreglo  : string []=[];
  let arreglo2 : string []=["a","b",'c'];
  let arreglo3 : Array<string> =["d","e",'f'];

  // INICIO arrow functions
  let usuario : any = {
       nombre : "Emmmanuel",
       getNombre: ((): string =>{
          //... codigo
          return nombre;
       }),
       setNombre: ((parametro: string): void =>{
         nombre = parametro;
       })
  }
  // FIN arrow functions
  usuario.setNombre("Lorenita");
  resultado.innerHTML = usuario.getNombre();

}
}