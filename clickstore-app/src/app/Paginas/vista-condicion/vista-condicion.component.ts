import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-condicion',
  templateUrl: './vista-condicion.component.html',
  styleUrls: ['./vista-condicion.component.scss']
})
export class VistaCondicionComponent implements OnInit {

  alert:string='primary';

  constructor() { }

  ngOnInit() 
  {
    setTimeout(()=>
      {
        this.alert='secondary';
      },3000);
      
      setTimeout(()=>
      {
        this.alert='success';
      },6000);
      
      setTimeout(()=>
      {
        this.alert='danger';
      },9000);

      setTimeout(()=>
      {
        this.alert='warning';
      },1200);

      setTimeout(()=>
      {
        this.alert='info';
      },1500);

      setTimeout(()=>
      {
        this.alert='light';
      },1800);

      setTimeout(()=>
      {
        this.alert='dark';
      },2100);
  }

}
