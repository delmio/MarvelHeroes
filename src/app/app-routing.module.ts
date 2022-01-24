import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', 
    loadChildren: () => import('./modules/lista-heroes/lista-heroes.module')
    .then(module => module.ListaHeroesModule) 
  },

  { path: 'heroe/:id_heroe', 
    loadChildren: () => import('./modules/heroe-seleccionado/heroe-seleccionado.module')
    .then(m => m.HeroeSeleccionadoModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
