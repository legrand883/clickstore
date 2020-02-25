import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

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
  constructor(private router: Router) { }

  ngOnInit(): void 
  {

  }

  public guardar()
  {
    console.log("USUARIO", this.usuario.value);
    console.log("VALIDAR NOMBRE", this.usuario.valid);

    this.esValido= this.usuario.valid;
    this.usuario.reset();
    this.router.navigateByUrl ("/usuarios")

    this.usuario.patchValue(
      {
      nombre: 'EMMANUEL',
      apellido: 'VILLALOBOS'
    });
  }

}
