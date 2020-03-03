import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SpinnerService } from '../../spinner.service'

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  public usuarios: Usuario [] = [];

    buscarForm:FormGroup= new FormGroup(
      {
        termino:new FormControl()
      })

  constructor(private servicioUsuariosService: ServicioUsuariosService, private router:Router, public spinnerService:SpinnerService) { }

  ngOnInit() {
    this.spinnerService.activo=true;

    this.servicioUsuariosService.obtenerTodos().subscribe(resultado=>
      {
        this.spinnerService.activo=false;
        this.usuarios=resultado;
      })

      this.buscarForm.valueChanges.subscribe(valor=>
        {
          console.log(valor);
        })
  }

  public borrar(id: string): void {
    this.servicioUsuariosService.borrar(id).subscribe(item => {
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].id == id) {
          this.usuarios.splice(i, 1)
        }
      }
    })

  };

  public editar (id: string)
  {
    this.router.navigateByUrl("usuarios/" + id);
  }
  

}
