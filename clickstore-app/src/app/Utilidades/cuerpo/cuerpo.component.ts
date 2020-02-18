import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  descripcion: string = 'Esta es la descripcion del producto';
  constructor() { }

  ngOnInit(): void {
  }

}
