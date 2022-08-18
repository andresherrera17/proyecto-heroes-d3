import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroes: IHeroe[] = {} as IHeroe[];

  constructor() { }

  ngOnInit(): void {
  }

}
