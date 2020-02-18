import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  precio: number = 12.33;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>
    {
      this.precio = 15.33;
    },3000);
  }

}
