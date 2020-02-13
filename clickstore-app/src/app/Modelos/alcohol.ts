import {Impuestos} from './impuestos';
import {Articulo} from './articulo';


export class Alcohol implements Impuestos, Articulo{

    porcentaje : number;
    precio:number;
    nombre:string;
    descripcion:string

    public tipo_alcohol: string;
    private porcentaje_alcohol: number;


    constructor(precio:number, nombre:string)
    {
        this.precio = precio;
        this.nombre = nombre;
    }

    calcular(tipo: string): number
    {
        return 0.1;
    }
    public getPorcentajeAlcohol(): number
    {
        return this.porcentaje_alcohol;
    }
}