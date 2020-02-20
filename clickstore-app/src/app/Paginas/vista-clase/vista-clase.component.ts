import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-clase',
  templateUrl: './vista-clase.component.html',
  styleUrls: ['./vista-clase.component.scss']
})
export class VistaClaseComponent implements OnInit {

index: number=0;

  constructor() { }

  ngOnInit() {
  }

  siguiente(){
  this.index++;
  }

}