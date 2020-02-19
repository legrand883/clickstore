import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit 
  {
    public titulo: string = "eme Le Grand";
    public codigo: number = 3711
    public clase: string = "fondo";

    @Input() titulo2: string;//angular
    @Input() codigo2: number = 3711           //angular
    @Input() clase2: string = "fondo";        //angular


  constructor() 
   {
      console.log("CONSTRUCTOR",this.titulo2);
   }

  ngOnInit()
  {
    console.log("NGONINIT",this.titulo2);
  }
  
  public getStatus():string
  {
    /*ESTE ES EL NOMBRE QUE APARECE EN <app-encabezado [titulo]="articulo.nombre"></app-encabezado> DE ___ tarjeta.component.htmnl*/
    return "N O M B R E"; 
  }

  public getTotal(importe:number)
  {
    return importe * 1.16;
  }

}
