import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/heroes-api';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class HeroesJsonApi {
  private readonly http: HttpClient = inject(HttpClient)


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.BASE_URL_DUMMY_API}/all.json`)
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${environment.BASE_URL_DUMMY_API}/id/${id}.json`)
  }

}
