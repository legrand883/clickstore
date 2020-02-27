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
}