import { Component, OnInit } from '@angular/core';
import { MarvelExternalApiService } from '../../services/marvel-external-api.service';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { storeColor } from './../../stores/hero.actions';
import { Observable, zip } from 'rxjs';
import { first } from 'rxjs/operators';

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
  _heroStored:any;
  storeChar$: Observable<any>;

  constructor(
    private MarvelExternalApi : MarvelExternalApiService,
    private router: Router,
    private _store: Store<{ storeColors: any }>
  ) {}

  ngOnInit(): void {
    this.storeChar$ = this._store.pipe(select('storeColors'));
    this.loadHeroes();
  }

  loadHeroes(){
    this.MarvelExternalApi.getHeroes().toPromise()
    .then((r)=>{

      let aux;
      let corr;

      this.storeChar$.pipe(first()).subscribe(res =>{
        if(res.length > 0){
          aux = res;
        }
      });


      this.listaHeroes = r.map(x => {

          this.Hero_                = new Hero;
          this.Hero_.id             = x.id;
          this.Hero_.description    = x.description;
          this.Hero_.resourceURI    = x.resourceURI;
          this.Hero_.modified       = x.modified;
          this.Hero_.name           = x.name;
          this.Hero_.urlFinalImagen = x.thumbnail.path + '.' + x.thumbnail.extension;

          if(aux){
            corr = aux.find(v => (v.id === x.id));
            if(corr){
              this.Hero_.color = corr.color;
            }else{
              this.Hero_.color = "white";
            }
          }else{
            this.Hero_.color = "white";
          }


          
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

    let offset = Number(this.page * this.step);

    let aux;
    let corr;

    this.storeChar$.pipe(first()).subscribe(res =>{
      if(res.length > 0){
        aux = res;
      }
    });
    
    this.MarvelExternalApi.getHeroesOffset(offset).toPromise()
    .then((r)=>{

      this.listaHeroes = r.map(x => {
          this.Hero_                = new Hero;
          this.Hero_.id             = x.id;
          this.Hero_.description    = x.description;
          this.Hero_.resourceURI    = x.resourceURI;
          this.Hero_.modified       = x.modified;
          this.Hero_.name           = x.name;
          this.Hero_.urlFinalImagen = x.thumbnail.path + '.' + x.thumbnail.extension;

          if(aux){
            corr = aux.find(v => (v.id === x.id));
            if(corr){
              this.Hero_.color = corr.color;
            }else{
              this.Hero_.color = "white";
            }
          }else{
            this.Hero_.color = "white";
          }

        return this.Hero_;
      });
      
    }).catch((err)=>{

      if(offsetType == 1){
        this.page = Number(this.page) + 1;
      }else if(offsetType == 2){
        this.page = Number(this.page) - 1;
      }

      console.log(err);
    })
  }

  redirectToHero(id_heroe){
    this.router.navigate(['heroe/' + id_heroe]);
  }

}
