import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeSeleccionadoRoutingModule } from './heroe-seleccionado-routing.module';
import { HeroeSeleccionadoComponent } from './heroe-seleccionado.component';


@NgModule({
  declarations: [HeroeSeleccionadoComponent],
  imports: [
    CommonModule,
    HeroeSeleccionadoRoutingModule
  ]
})
export class HeroeSeleccionadoModule { }
