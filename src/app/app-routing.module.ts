import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaMascotaComponent } from './Componentes/carga-mascota/carga-mascota.component';
import { ListadoComponent } from './Componentes/listado/listado.component';
import { MascotaComponent } from './Componentes/mascota/mascota.component';
import { MenuComponent } from './Componentes/menu/menu.component';

const routes: Routes = [

  {path: 'menu', component: MenuComponent },
  {path: 'carga', component: CargaMascotaComponent },
  {path: 'listado', component: ListadoComponent }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
