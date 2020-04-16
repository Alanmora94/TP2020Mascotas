import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {
  //@Output()
  //agregar = new EventEmitter<Mascota>();

  lista: Array<Mascota> = [];
  Atributos : any = {nombre:"",imagen:"",tipo:""};
  formulario :HTMLFormElement;  

  constructor(private toastr: ToastrService) {

    if (localStorage.length > 0){

      for (let i = 0; i < localStorage.length; i++) {
        
        if (localStorage.key(i) == "lista"){

          this.lista = JSON.parse(localStorage.getItem("lista"));
        }   
        
      }
    }

  }


  ngOnInit(): void {
  }

  public GrabarMascota (){
    
    this.lista.push(new Mascota(this.Atributos.nombre,this.Atributos.imagen,this.Atributos.tipo));
    localStorage.setItem("lista", JSON.stringify(this.lista));
    this.formulario = <HTMLFormElement>document.getElementById("carga");
    this.formulario.reset();
    this.Atributos.imagen="";
    switch(this.Atributos.tipo) { 
      case "Perro": { 
        this.toastr.success('El Perro ha sido agregado!');
         break; 
      } 
      case "Gato": { 
        this.toastr.error('El Gato ha sido agregado!');
         break; 
      } 
      case "Pez": { 
        this.toastr.info('El Pez ha sido agregado!');
        break; 
     } 
   } 



  }

  /*public GrabarMascota (){

    this.lista.push(e);
    console.log(e);

  }*/


  /*SeleccionarImg(event){

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

  }*/

  /*cargar(){

    this.mascota = new Mascota(this.Atributos.nombre,this.Atributos.imagen,this.Atributos.tipo);
    this.mascota.mostrar();
    this.agregar.emit(this.mascota.nombre);
    this.agregar.emit(this.mascota);
  }*/




}
