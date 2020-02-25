import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-vista-identificador',
  templateUrl: './vista-identificador.component.html',
  styleUrls: ['./vista-identificador.component.scss']
})
export class VistaIdentificadorComponent implements OnInit {

  public ID:string;
  public IDENTIFICADOR: string;
  public FECHA_INICIO:string;

  constructor(private activateRoute: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    this.ID= this.activateRoute.snapshot.params['ID']
    this.IDENTIFICADOR= this.activateRoute.snapshot.params['IDENTIFICADOR']
    this.FECHA_INICIO= this.activateRoute.snapshot.queryParams['FECHA_INICIO']
  }/**/

}
