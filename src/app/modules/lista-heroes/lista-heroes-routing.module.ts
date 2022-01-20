import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHeroesComponent } from './lista-heroes.component';

const routes: Routes = [{ path: '', component: ListaHeroesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaHeroesRoutingModule { }
