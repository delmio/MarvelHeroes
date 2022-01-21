import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeSeleccionadoComponent } from './heroe-seleccionado.component';

const routes: Routes = [{ path: '', component: HeroeSeleccionadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroeSeleccionadoRoutingModule { }
