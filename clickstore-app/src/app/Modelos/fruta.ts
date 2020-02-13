import {Impuestos} from './impuestos';
import {Articulo} from './articulo';
import { from } from 'rxjs';

export class Fruta implements Impuestos, Articulo
{
    porcentaje : number;
    caducidad : Date;

    precio:number;
    nombre:string;
    descripcion:string

    constructor()
    {

    }

    calcular(tipo:string)
    {
        return 0.1;
    }
}

export class Verdura implements Impuestos, Articulo
{
    porcentaje : number;
    caducidad : Date;

    precio:number;
    nombre:string;
    descripcion:string

    constructor()
    {

    }

    calcular(tipo:string)
    {
        return 0.1;
    }
}