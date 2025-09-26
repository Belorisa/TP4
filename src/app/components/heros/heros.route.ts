import { Routes } from '@angular/router';
import { Heros } from './heros';
import { HeroPage } from '../hero/hero';


export const HEROES_ROUTES: Routes = [
    {path: '',component: Heros},
    {path: ':id',component: HeroPage}
]