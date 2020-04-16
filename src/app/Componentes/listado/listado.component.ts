import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista: Array<Mascota> = JSON.parse(localStorage.getItem("lista"));
  mascota : Mascota;
  mascotaSeleccionada : any;
  constructor() { 

    console.log(this.lista);
  }

  ngOnInit(): void {
  }

 
  MostrarMascota(event){

    console.log(event);
    this.mascota = event;

  }


  Detalle(x){

    console.log(x);

    this.mascotaSeleccionada = x;

  }
  


}
