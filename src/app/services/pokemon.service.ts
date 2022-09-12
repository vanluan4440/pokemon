import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { domain,api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemon():Observable<any>{
    const url = domain.url + api.pokemon
    return this.http.get<any>(url)
  }
  getDetailPokemon(url:string): Observable<any>{
    return this.http.get<any>(url)
  }

  getDeteilByName(name:string): Observable<any>{
    const url = domain.url + api.pokemon_detail + `/${name}`
    return this.http.get<any>(url)
  }
}
