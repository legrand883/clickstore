import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {

  public esValido:boolean=true;
  
  public usuario:FormGroup=new FormGroup
  
  (
    {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('VILLALOBOS',[Validators.required])
    }
  );
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private servicioUsuariosService: ServicioUsuariosService) { }

  ngOnInit()
  {
    let id: string = this.activatedRoute.snapshot.params['id'];
  }



  public guardar()
  {
    console.log("USUARIO", this.usuario.value);
    console.log("VALIDAR NOMBRE", this.usuario.valid);

    this.esValido= this.usuario.valid;
    this.servicioUsuariosService.crear(this.usuario.value).subscribe(usuario=>
      {

    this.usuario.reset();
    this.router.navigateByUrl ("/usuarios");
  });
  
    this.usuario.patchValue(
      {
      nombre: 'EMMANUEL',
      apellido: 'VILLALOBOS'
    });
  }

}
