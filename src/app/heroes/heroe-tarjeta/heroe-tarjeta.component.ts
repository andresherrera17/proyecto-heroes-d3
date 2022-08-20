import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroes: IHeroe[] = {} as IHeroe[];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verMas(hero:IHeroe){
    this.router.navigate(['/heroes/heroe',hero.id]);
  }

}
