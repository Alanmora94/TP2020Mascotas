import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //@Input() lista: Array<Mascota>;

  lista: Array<Mascota> = JSON.parse(localStorage.getItem("lista"));
  mascota : Mascota;
  mascotaSeleccionada : any;
  constructor() { 

    console.log(this.lista);
  }

  ngOnInit(): void {
  }

  /*Mostrar (event){
    console.log(event);
  }*/

  MostrarMascota(event){

    console.log(event);
    console.log("entro en mostrar mascota")
    this.mascota = event;

  }


  Detalle(x){

    console.log(x);

    this.mascotaSeleccionada = x;

  }
  


}
