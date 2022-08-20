import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IHeroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes$: Subject<IHeroe[]>;
  heroes: IHeroe[] = [];

  constructor() { 
    this.heroes$ = new Subject();
  }

  addHeroe(heroe:IHeroe){
    this.heroes.push(heroe);
    this.heroes$.next(this.heroes);
  }

  getHeroes$(){
    return this.heroes$.asObservable();
  }

  getHerobyId(id:string){
    let hero : IHeroe | undefined = this.heroes.find(x => x.id == id);
    return hero;
  }
}
