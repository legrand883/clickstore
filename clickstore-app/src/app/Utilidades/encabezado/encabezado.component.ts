import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit()
  {
    
  }
  
  public getStatus():string
  {
    return "Nombre";
  }

  public getTotal(importe:number)
  {
    return importe * 1.16;
  }

}
