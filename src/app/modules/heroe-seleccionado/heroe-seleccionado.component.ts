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
      this.SelectedHero_.id             = r.id;
      this.SelectedHero_.description    = r.description;
      this.SelectedHero_.resourceURI    = r.resourceURI;
      this.SelectedHero_.modified       = r.modified;
      this.SelectedHero_.name           = r.name;
      this.SelectedHero_.urlFinalImagen = r.thumbnail.path + '.' + r.thumbnail.extension;
      this.SelectedHero_.comics         = r.comics.items;
      this.SelectedHero_.events         = r.events.items;
      this.SelectedHero_.series         = r.series.items;
      this.SelectedHero_.stories        = r.stories.items;
    }).catch((err)=>{
      console.log(err);
    })
  }

  redirectBack(){
    this.router.navigate(['']);
  }

}
