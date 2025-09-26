import { Component, inject,signal } from '@angular/core';
import { HeroesJsonApi } from '../../services/heroes-json-api';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../models/heroes-api';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroPage {
  hero = signal<Hero | undefined>(undefined) ;
  heroId?: number
  private readonly heroesJsonApi: HeroesJsonApi = inject(HeroesJsonApi)
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute)


   ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(typeof params.get('id'))
      if (params.has('id')) {
        this.heroId = +params.get('id')!
        this.fetchHero()
      }
    })
  }

  fetchHero() {
    this.heroesJsonApi.getHero(this.heroId!).subscribe({
      next: data => {
        console.log('Hero Response', data);
        this.hero.set(data)
        console.log('Hero test', this.hero());
      },
      error: error => console.error(error)
    })
  }


}
