import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-vista-estilo',
  templateUrl: './vista-estilo.component.html',
  styleUrls: ['./vista-estilo.component.scss']
})
export class VistaEstiloComponent implements OnInit {

  estilo:any =
  {
    'font-family':'Arial'
  }

  constructor() { }

  ngOnInit(): void 
  {  }
  setFamily(family:string):void
    {
      this.estilo['font-family']=family;
    }

}
