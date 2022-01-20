import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports



const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./modules/lista-heroes/lista-heroes.module')
    .then(module => module.ListaHeroesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
