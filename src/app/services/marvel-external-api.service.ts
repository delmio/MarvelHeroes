import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HasherPipe } from './../_helpers/hasher.pipe';

@Injectable({
  providedIn: 'root'
})

export class MarvelExternalApiService {

  private _url: string = environment.marvelExternalUrl;
  private _apiKey: string = environment.publicKey;
  private _apiHash:any = new HasherPipe().md5Hasher(this._apiKey);

  constructor(private _http: HttpClient) {}
  
  getHeroes():Observable<any>{
    var finalUrl = this._url + 'characters?apikey=' + this._apiKey + '&hash=' + this._apiHash;
    return this._http.get(finalUrl);
  }

}