export interface Impuestos 
{
    porcentaje : number;
    calcular:((tipo:string) => number);
}