import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { Usuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public esValido:boolean=true;
  
  public usuarioForm:FormGroup=new FormGroup
  
  (
    {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required])
    }
  );
  constructor(private router: Router, private activatedRoute:ActivatedRoute,private servicioUsuariosService: ServicioUsuariosService) { }

  ngOnInit()
  {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.servicioUsuariosService.obtener(id).subscribe(resultado=>{
      this.usuarioForm.patchValue(resultado);
    })
  };

  public actualizar()
  {
    let usuario:Usuario=this.usuarioForm.value;
    usuario.id=this.activatedRoute.snapshot.params['id'];
    this.servicioUsuariosService.actualizar(usuario).subscribe(usuario =>
      {
        this.router.navigateByUrl("/usuarios")
      })
  }

}
