import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Modelos/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//ESTO ES PARA CONSUMIR UN API
export class ServicioUsuariosService {

  private url: string = "https://legrand-c5a31.firebaseio.com/usuarios";

  constructor(private httpClient: HttpClient) {

  }

  obtenerTodos(): Observable<Usuario[]> {
    return this.httpClient.get(this.url + ".json").pipe(map(resultado => {
      let usuarios: Usuario[] = [];
      for (let atributo in resultado) {
        usuarios.push(
          {
            id: atributo,
            nombre: resultado[atributo].nombre,
            apellido: resultado[atributo].apellido
          })
      }
      return usuarios;
    }));
  }

  obtener(id: string): Observable<Usuario>
  {
    return this.httpClient.get<Usuario>(this.url + "/" + id + ".json")
  }
  
  crear(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<any>(this.url + ".json", usuario).pipe(map(resultado => {
      usuario.id = resultado.name;
      return usuario;
    }))
  }

  public borrar(id:string):Observable<any>
  {
    return this.httpClient.delete<any>(this.url + '/' + id + ".json")
  }

  public actualizar(usuario:Usuario): Observable<Usuario>
  {
    return this.httpClient.put<any>(this.url + '/' + usuario.id + ".json", usuario).pipe(map(resultado=>
      {
        let usuarioRespuesta: Usuario= resultado;
        usuarioRespuesta.id=usuario.id;
        return usuarioRespuesta;
      }))
  };
}