import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  private _id:any;
  lista: Array<Mascota>;

  @Output() mostrarMascota = new EventEmitter<any>();
  @Input() 
  public set id (id : number){
	
    this.lista = JSON.parse(localStorage.getItem("lista"));
    this.mostrarMascota.emit(this.lista[id]);
    }

  constructor() { }

  ngOnInit(): void {
  }




}
