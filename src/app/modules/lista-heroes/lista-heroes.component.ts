import { Component, OnInit } from '@angular/core';
import { MarvelExternalApiService } from '../../services/marvel-external-api.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css'],
  providers: [
    MarvelExternalApiService
  ]
})
export class ListaHeroesComponent implements OnInit {

  constructor(
    private MarvelExternalApi : MarvelExternalApiService
  ) {}

  ngOnInit(): void {

    this.MarvelExternalApi.getHeroes().toPromise()
    .then((r)=>{
      console.log(r);
    })
  }

}