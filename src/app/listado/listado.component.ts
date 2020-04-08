import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() lista: Array<Mascota>;

  mascota : Mascota;

  constructor() { 

    console.log(this.lista);
  }

  ngOnInit(): void {
  }

  /*Mostrar (event){
    console.log(event);
  }*/



  Detalle(x){

    console.log(x.nombre);
    this.mascota = x;

  }
  


}
