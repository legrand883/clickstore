import { Pipe, PipeTransform, ɵConsole } from '@angular/core';
import { Usuario } from '../Modelos/usuario'


@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(usuarios: Usuario[], termino: string): any {

if(!termino)
{
  return usuarios;
}

if(termino == '')
{
  return usuarios;
}

usuarios = usuarios.filter(usuario=>
      {
        return usuario.nombre.toLocaleLowerCase().includes(termino.toLocaleLowerCase())
        || usuario.apellido.toLocaleLowerCase().includes(termino.toLocaleLowerCase());
      });
      console.log(usuarios);
    return usuarios;
  }

}
