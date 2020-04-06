import { Component } from '@angular/core';
import { Mascota } from './clases/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mascotas';

  lista: Array<Mascota> = [];

  public GrabarMascota (e:Mascota){

    this.lista.push(e);
    console.log(e);

  }

}
