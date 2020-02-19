import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  precio: number = 12.33;
  importe: number = 0;
  cantidad: number = 1;

  @Input() precio2: number = 7.11; //angular
  @Output() onImporte:EventEmitter<number>= new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>
    {
      this.precio = 15.33;
    },3000);
  }
  
  calculoImporte (event: any)
  {
    console.log(event);
    this.importe = event.target.value*1.16;
  }

  calculaTotal ()
  {
    //alert("AQUI VAMOS -calcular el total-")//sirve para debugguear, son simples alertas
    let total = this.importe * this.cantidad
    this.onImporte.emit(total);
  }
}
