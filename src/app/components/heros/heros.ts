import { Component, inject } from '@angular/core';
import { HeroesJsonApi } from '../../services/heroes-json-api';
import { RouterLink } from '@angular/router';
import { Hero } from '../../models/heroes-api';

@Component({
  selector: 'app-heros',
  imports: [RouterLink],
  templateUrl: './heros.html',
  styleUrl: './heros.css'
})
export class Heros {
  heroes?: Hero[]
  private readonly heroesJsonApi : HeroesJsonApi = inject(HeroesJsonApi)

  ngOnInit(){
    this.heroesJsonApi.getHeroes().subscribe({
      next: data =>{
        console.log('Hero Response',data);
        this.heroes = data
      },
      error: error => console.error(error)
    })
  }
}
