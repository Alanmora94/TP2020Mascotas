import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  //@Output() mostrarMascota = new EventEmitter<any>();
  @Input() mascota: Mascota;

  constructor() { }

  ngOnInit(): void {
  }




}
