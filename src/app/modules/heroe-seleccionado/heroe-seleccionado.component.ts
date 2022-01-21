import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelExternalApiService } from '../../services/marvel-external-api.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-heroe-seleccionado',
  templateUrl: './heroe-seleccionado.component.html',
  styleUrls: ['./heroe-seleccionado.component.css'],
  providers: [
    MarvelExternalApiService
  ]
})
export class HeroeSeleccionadoComponent implements OnInit {
  idHeroe:any;
  SelectedHero_ = new Hero;

  constructor(
    private MarvelExternalApi : MarvelExternalApiService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idHeroe = this._route.snapshot.paramMap.get('id_heroe');

    if(this.idHeroe != '' && this.idHeroe != undefined && this.idHeroe != null){
      this.loadHero(this.idHeroe);
    }

  }


  loadHero(heroId){
    
    this.MarvelExternalApi.getHeroById(heroId).toPromise()
    .then((r)=>{
      this.SelectedHero_                = new Hero;
      this.SelectedHero_.id             = r.data.results[0].id;
      this.SelectedHero_.description    = r.data.results[0].description;
      this.SelectedHero_.resourceURI    = r.data.results[0].resourceURI;
      this.SelectedHero_.modified       = r.data.results[0].modified;
      this.SelectedHero_.name           = r.data.results[0].name;
      this.SelectedHero_.urlFinalImagen = r.data.results[0].thumbnail.path + '.' + r.data.results[0].thumbnail.extension;
      this.SelectedHero_.comics         = r.data.results[0].comics.items;
      this.SelectedHero_.events         = r.data.results[0].events.items;
      this.SelectedHero_.series         = r.data.results[0].series.items;
      this.SelectedHero_.stories        = r.data.results[0].stories.items;
    }).catch((err)=>{
      console.log(err);
    })
  }

  redirectBack(){
    this.router.navigate(['']);
  }

}
