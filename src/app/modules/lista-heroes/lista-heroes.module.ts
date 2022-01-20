import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaHeroesRoutingModule } from './lista-heroes-routing.module';
import { ListaHeroesComponent } from './lista-heroes.component';


@NgModule({
  declarations: [ListaHeroesComponent],
  imports: [
    CommonModule,
    ListaHeroesRoutingModule
  ]
})
export class ListaHeroesModule { }
