import { Component, OnInit } from '@angular/core';
import { MarvelExternalApiService } from '../../services/marvel-external-api.service';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css'],
  providers: [
    MarvelExternalApiService
  ]
})
export class ListaHeroesComponent implements OnInit {

  Hero_ = new Hero;
  listaHeroes: Array<Hero> = [];
  page:number = 0;
  step:number = 20;
  total:number = 0;

  constructor(
    private MarvelExternalApi : MarvelExternalApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHeroes();
  }

  loadHeroes(){
    this.MarvelExternalApi.getHeroes().toPromise()
    .then((r)=>{

      this.listaHeroes = r.data.results.map(x => {
          this.Hero_                = new Hero;
          this.Hero_.id             = x.id;
          this.Hero_.description    = x.description;
          this.Hero_.resourceURI    = x.resourceURI;
          this.Hero_.modified       = x.modified;
          this.Hero_.name           = x.name;
          this.Hero_.urlFinalImagen = x.thumbnail.path + '.' + x.thumbnail.extension;

        return this.Hero_;
      });
      
    }).catch((err)=>{
      console.log(err);
    })
  }

  setOffsetPage(offsetType){

    if(offsetType == 1){
      this.page = Number(this.page) - 1;
    }else if(offsetType == 2){
      this.page = Number(this.page) + 1;
    }
    console.log(this.page);
    let offset = this.page * this.step;
    this.MarvelExternalApi.getHeroesOffset(offset).toPromise()
    .then((r)=>{

      this.listaHeroes = r.data.results.map(x => {
          this.Hero_                = new Hero;
          this.Hero_.id             = x.id;
          this.Hero_.description    = x.description;
          this.Hero_.resourceURI    = x.resourceURI;
          this.Hero_.modified       = x.modified;
          this.Hero_.name           = x.name;
          this.Hero_.urlFinalImagen = x.thumbnail.path + '.' + x.thumbnail.extension;

        return this.Hero_;
      });
      
    }).catch((err)=>{
      console.log(err);
    })
  }

  redirectToHero(id_heroe){
    this.router.navigate(['heroe/' + id_heroe]);
  }

  // openHeroModal(heroId){
    
  //   this.MarvelExternalApi.getHeroById(heroId).toPromise()
  //   .then((r)=>{
  //     console.log(r);
  //     this.listaActivos[0] = "active";
  //     this.listaActivosContent[0] = "fade show active";
  //     this.SelectedHero_                = new Hero;
  //     this.SelectedHero_.id             = r.data.results[0].id;
  //     this.SelectedHero_.description    = r.data.results[0].description;
  //     this.SelectedHero_.resourceURI    = r.data.results[0].resourceURI;
  //     this.SelectedHero_.modified       = r.data.results[0].modified;
  //     this.SelectedHero_.name           = r.data.results[0].name;
  //     this.SelectedHero_.urlFinalImagen = r.data.results[0].thumbnail.path + '.' + r.data.results[0].thumbnail.extension;
  //     this.SelectedHero_.comics         = r.data.results[0].comics.items;
  //     this.SelectedHero_.events         = r.data.results[0].events.items;
  //     this.SelectedHero_.series         = r.data.results[0].series.items;
  //     this.SelectedHero_.stories        = r.data.results[0].stories.items;
  //   }).then(()=>{
  //     this.SelectedHero_.comics = this.SelectedHero_.comics.map(x =>{
  //       x.idComic = x.resourceURI.replace("http://gateway.marvel.com/v1/public/comics/","");
  //       return x;
  //     });
  //   }).then(()=>{
  //     $('#heroDescription').modal('show');
  //   })
  // }

  // changeActive(index){
  //   this.listaActivos = this.listaActivos.map((x, i) => {
  //     if(index == i){
  //       x = "active";
  //     }else{
  //       x = "";
  //     }
  //     return x;
  //   })

  //   this.listaActivosContent = this.listaActivosContent.map((x, i) => {
  //     if(index == i){
  //       x = "fade show active";
  //     }else{
  //       x = "";
  //     }
  //     return x;
  //   })
  // }

}
