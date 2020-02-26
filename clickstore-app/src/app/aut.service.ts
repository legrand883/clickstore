import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutService {

  activo:boolean=false;

  constructor(private router:Router) { }

  public login(usuario:string, contrasena:String)
  {
    if(usuario == "emesystem007@gmail.com" && 
       contrasena == "321")
      {
        this.activo=true;
        return true;
      }
  }

  public esActivo()
  {
    let usuario:any = JSON.parse(localStorage.getItem('usuario'));
    
    if(usuario == null)
    {

      if (usuario.usuario == 'emesystem007@gmail.com')
      {
       this.activo=true;
       this.router.navigateByUrl("/login"); //aqui es para poder colocar LA PAGINA DE INICIO por DEFAULT
      }
       else
       {
         this.activo = false;
       }
    }
  }

  public salir()
  {
    localStorage.clear();
    this.router.navigateByUrl("/login"); 
    this.activo = false;
  }
}
