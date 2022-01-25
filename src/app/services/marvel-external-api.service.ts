import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MarvelExternalApiService {

  private _url: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}
  
  getHeroes():Observable<any>{
    var finalUrl = this._url + 'characters/';
    return this._http.get(finalUrl);
  }

  getHeroesOffset(offset:number):Observable<any>{
    var finalUrl = this._url + 'characters/offset/'+offset;
    return this._http.get(finalUrl);
  }

  getHeroById(id):Observable<any>{
    var finalUrl = this._url + 'characters/'+ id;
    return this._http.get(finalUrl);
  }

  postHeroColorGroup(body:any):Observable<any>{
    var finalUrl = this._url + 'character/saveColor/';
    return this._http.post(finalUrl, body);
  }
}