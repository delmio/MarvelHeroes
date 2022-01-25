import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelExternalApiService } from '../../services/marvel-external-api.service';
import { select, Store } from '@ngrx/store';
import { storeColor } from './../../stores/hero.actions';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
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
  group_colors = ["#1f8ff7","#a43de3","#df5c0f","#0ea521"];
  _heroStored:any;
  storeChar$: Observable<any>;

  constructor(
    private MarvelExternalApi : MarvelExternalApiService,
    private _route: ActivatedRoute,
    private router: Router,
    private _store: Store<{ storeColors: any }>
  ) { }

  ngOnInit(): void {
    this.idHeroe = this._route.snapshot.paramMap.get('id_heroe');

    this.storeChar$ = this._store.pipe(select('storeColors'));

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
    }).catch((err)=>{
      console.log(err);
    })
  }

  redirectBack(){
    this.router.navigate(['']);
  }

  abrirModalHeroe(){
    $("#modalTeamHeroe").modal("show");
  }

  seleccionarTeam(color:string){

    let auxArr = new Array();
    auxArr.push({id:this.SelectedHero_.id, color: color});

    this.MarvelExternalApi.postHeroColorGroup(auxArr).toPromise()
    .then((r)=>{

      if(r.ok){
        this.storeChar$.pipe(first()).subscribe(res =>{
          this._store.dispatch(storeColor({heroe:auxArr}));
        });
      }else{
        console.log(r.error);     
      }
      console.log(r);
    }).then(()=>{
      this.SelectedHero_.color = color;
      this.SelectedHero_.existeColor = true;
      $("#modalTeamHeroe").modal("hide");
    }).catch((error)=>{
      console.log(error);
    });
  
  }

}
