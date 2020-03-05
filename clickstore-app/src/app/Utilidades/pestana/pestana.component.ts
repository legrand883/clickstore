import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-pestana',
  templateUrl: './pestana.component.html',
  styleUrls: ['./pestana.component.scss']
})
export class PestanaComponent implements OnInit {

    @Input() pestana:any[]=[];
    @Output() onTab: EventEmitter<string>=new EventEmitter<string>();

    constructor() { }

  ngOnInit() { }

  public clickTab(identificador:string)
    {
      //alert ('estoy aqui');
      this.onTab.emit(identificador);
    }

}
