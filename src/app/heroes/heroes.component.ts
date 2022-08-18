import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [
    {
      nombre: 'Daredevil',
      descripcion: 'Superheroe',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa:'Marvel'
    },
    {
      nombre: 'Superman',
      descripcion: 'Superheroe',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-01-01',
      casa:'Marvel'
    }
  ];

  
  constructor() { }

  ngOnInit(): void {

    
  }

}
