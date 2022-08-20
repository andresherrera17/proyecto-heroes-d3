import { Component, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { uid } from 'uid';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  heroe: IHeroe = {
    nombre: 'Daredevil',
    descripcion: 'Superheroe',
    img: 'assets/img/daredevil.png',
    aparicion: '1964-01-01',
    casa:'Marvel'
  }


  constructor(private _serviceHeroes: HeroesService) { }

  ngOnInit(): void {
  }

  addHeroe(){
    let hero: IHeroe = { ...this.heroe, id: uid() }
    console.log(hero);
    this._serviceHeroes.addHeroe(hero);
  }



  /* 
    Componente heroe-form
     1. van crear el servicio de heroes
     2. van a guardar por medio del observable "subject" los heroes 
     3. van crear el metodo para consultar los heroes

    Componente heroes
     4. Colocar el componente de form-heroes en el componente de heroes
     5. En el componente heroes van hacer el suscribe a los heroes y por el momento van a mostrar un console log de los heroes
  */   

}
