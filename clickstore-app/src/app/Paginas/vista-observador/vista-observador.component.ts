import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { debounceTime, filter } from 'rxjs/operators'

@Component({
  selector: 'app-vista-observador',
  templateUrl: './vista-observador.component.html',
  styleUrls: ['./vista-observador.component.scss']
})
export class VistaObservadorComponent implements OnInit {

  cadena$: Observable<string>;
  lista$: Observable<any[]>;
  constructor() { }

  ngOnInit()
  {
    this.cadena$= this.getObservable().pipe(filter(cadena=> 
      {return cadena=="VILLALOBOS"}));
    this.lista$= this.getObservable_list().pipe(debounceTime(2000));//debounceTime ayuda a darle tiempo al cargar

    // ASI FUNCIONA LA MANERA ASINCRONICA en javascript
    console.log("INICIO");

    setTimeout(() => {
      console.log("YA PASARON 3 SEGUNDOS");
    }, 3000);

    console.log("FIN 01");

    this.getObservable().subscribe(item=>
      {
        console.log(item)
      });

      console.log("FIN 02");
  }


  getObservable(): Observable<string>
  {
    return Observable.create(observer=>
      {
        setTimeout(() => 
        {
          observer.next("EMMANUEL");
        }, 1000);

        setTimeout(() => 
        {
          observer.next("VILLALOBOS");
          observer.complete();
        }, 3000);
      });
  }

  getObservable_list(): Observable<any []>
  {
    return Observable.create(observer=>
      {
        let arreglo:any=[];

        setTimeout(() => 
        {
          arreglo.push(
            {
              nombre: 'Nombre 01 ',
              precio: 3
            })

          observer.next("EMMANUEL");
        }, 3000);

        setTimeout(() => 
        {
          arreglo.push(
            {
              nombre: 'Nombre 02 ',
              precio: 7
            })

          observer.next(arreglo);
          observer.complete();
        }, 7000);
      });
  }
}
