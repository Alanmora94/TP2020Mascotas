import { Host } from '@angular/core';

export class Mascota {

nombre: string;
imagen: string;
tipo: string;

constructor(nom:string,img:string,ti:string){

    this.nombre=nom;
    this.imagen=img;
    this.tipo=ti;

}

public mostrar () : void{

    console.log(this.nombre + " " + this.imagen + " " + this.tipo);
}


}
