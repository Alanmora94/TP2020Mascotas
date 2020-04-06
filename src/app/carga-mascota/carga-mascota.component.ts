import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  //@Output()
  //agregar = new EventEmitter<Mascota>();
  
  lista: Array<Mascota> = [];
  Atributos : any = {nombre:"",imagen:"sin",tipo:""};
    
  constructor() { }

  ngOnInit(): void {
  }


  

  public GrabarMascota (){

    this.lista.push(new Mascota(this.Atributos.nombre,this.Atributos.imagen,this.Atributos.tipo));
    //console.log(e);

  }

  /*public GrabarMascota (){

    this.lista.push(e);
    console.log(e);

  }*/


  SeleccionarImg(event){

    console.log('llego a evento imagen');
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0 ){
      console.log("entra");
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.Atributos.imagen = reader.result.toString().split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log(reader.result.toString().split(',')[1]);
        this.Atributos.imagen = reader.result.toString().split(',')[1];
        console.log(reader.result);
      };
    }

  }

  //cargar(){

    //this.mascota = new Mascota(this.Atributos.nombre,this.Atributos.imagen,this.Atributos.tipo);
    //this.mascota.mostrar();
    //this.agregar.emit(this.mascota.nombre);
    //this.agregar.emit(this.mascota);
 // }




}
