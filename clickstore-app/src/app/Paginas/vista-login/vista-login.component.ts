import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router'
import { AutService } from '../../aut.service'

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent implements OnInit {

  error : string;
  usuarioForm: FormGroup= new FormGroup
  (
    {
      usuario: new FormControl(),
      contrasena: new FormControl()
    }
  );

  constructor( private router:Router, private autService: AutService) { }

  ngOnInit(): void {  }

    login()
    {
      let usuario:string=this.usuarioForm.value.usuario;
      let contrasena:string=this.usuarioForm.value.contrasena;
      if(this.autService.login(usuario,contrasena))
      {
        localStorage.setItem("usuario", JSON.stringify(this.usuarioForm.value));/* ESTA LINEA ES PARA COOKIES */
        this.router.navigateByUrl('componentes/componentes');
      }
      else
      {
        this.error="datos incorrectos";
      }
    }
}
