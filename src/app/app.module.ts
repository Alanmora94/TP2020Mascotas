import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './carga-mascota/carga-mascota.component';

import {Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { MascotaComponent } from './mascota/mascota.component';





@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    ListadoComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
