import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  hero: IHeroe = {} as IHeroe;

  constructor(
    private _serviceHeroe: HeroesService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.activedRouter.params.subscribe(params => {
      this.hero = this._serviceHeroe.getHerobyId(params["id"]) || {} as IHeroe;
    })
  }

  regresar(){
    this.router.navigate(['/heroes']);
  }
}
