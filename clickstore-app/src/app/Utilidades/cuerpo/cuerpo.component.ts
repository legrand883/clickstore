import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  descripcion: string = 'Esta es la descripcion del producto';
  
  @Input() descripcion2: string = "eme Le Grand";//angular
  constructor() { }

  ngOnInit(): void {
  }

}
