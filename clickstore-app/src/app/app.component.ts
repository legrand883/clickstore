import { Component, OnInit } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';
import { Articulo, Fruta, Verdura, Alcohol, Impuestos } from './Modelos';
import { AutService } from './aut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'clickstore-app';


  constructor(public autService:AutService){}

  ngOnInit()
  {

    this.autService.esActivo();


  let nombre 		     = "Emmanuel";
  let nombre2:string = "Emmanuel 2";
  let nombre3:string = 'Emmanuel 3';

  let booleano: boolean = true;
  let nombre4:  any     = 'Emmanuel 4'
  let nombre5:  string  | number = 3;

  let objeto1: any = {
  	  nombre  : "Emmanuel",
  	  apellido: "Villalobos"
  	  }

  let objeto2 = {
  	  nombre  :"Emmanuel",
  	  apellido:"Villalobos"
  	  }

  var resultado = document.getElementById("Resultado");
  //resultado.innerHTML = objeto1.nombre;

  //resultado.innerHTML = objeto2['nombre'];

  let atributo: string = "apellido";
  //resultado.innerHTML = objeto1[atributo];

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
  //resultado.innerHTML = usuario.getNombre();

  // --- 

  for(let i=0; i<arreglo2.length; i++)
  {
    console.log(arreglo2[i]);
  }

// --- 
  for(let valor of arreglo3)
  {
    console.log(valor);
  }

  let arreglo4: any [] = 
  [
    {
      nombre:"Emmanuel",
      apellido:"Villalobos"
    },
    {
      nombre:"Luis",
      apellido:"Hernandez"
    }
  ]

// --- 
  for (let obj of arreglo4)
  {
    console.log(obj);
    console.log(obj.nombre);
  }

  arreglo4.forEach((item:any): void=>
  {
console.log(item)
  })

  //FILTER, MAP, FIND, SORT

  let nombres : string[] = arreglo4.map(item=>
    {
      return item.nombre;
    });
    console.log("NOMBRES",nombres);

    console.log(arreglo4[0].direccion);

    if (!arreglo4[0].direccion)
    {
      console.log("E N T R O");
    }

    if ([].length)
    {
      console.log("ESTOY VACIO");
    }

    if (["L","E"].length)
    {
      console.log("TENGO LETRAS");
    }



    let valor1: string;
    let valor2: number = 1;

    if (valor1 === undefined)
    {
      console.log("NO TENGO NADA DE VALOR")
    }


    for (let attributo in arreglo4[0])
    {
      console.log("atributo",attributo);
      console.log("valor",arreglo4[0][attributo]);
    }

    // INICIO FUNCION DE BUSQUEDA FLECHA
    let lista_usuario: any [] = 
  [
    {
      nombre:"Lorena",
      apellido:"Jimenez"
    },
    {
      nombre:"Emmanuel",
      apellido:"Villalobos"
    },
    {
      nombre:"Eduardo",
      apellido:"Morales"
    },
    {
      nombre:"Hector",
      apellido:"Morales"
    },
    {
      nombre:"Jorge",
      apellido:"Treviño"
    }
  ];

  let Lorena_Jimnez = lista_usuario.find(item=>
    {
      return item.nombre == "Lorena" && item.apellido == "Jimenez";
    });

    console.log("LORENA",Lorena_Jimnez);

    // FIN FUNCION DE BUSQUEDA FLECHA

    // --- --- --- --- --- --- --- --- --- --- --- 
    // INICIO E J E R C I C I O
    let lista_numero: number[] = [1,43,3,65,3,48,9];
    let resul: number[]=lista_numero.filter(item=>
      {
        return item > 40
      })

      console.log("MARYOR DE 40 SON: ",resul);

    // FIN E J E R C I C I O
    // --- --- --- --- --- --- --- --- --- --- --- 



    let Articulo : Articulo =
    {
      nombre:"Refresco",
      precio: 11.7
    };
    Articulo.precio = 7.11


     // ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- ----------- EJERCICIO DE 12 FEBRERO 2020


     let alcohol : Alcohol = new Alcohol (250, "Tequila");
     alcohol.porcentaje=0.3;

     let porcentaje = alcohol.getPorcentajeAlcohol();

  }
}