import { Component, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/interfaces/heroe.interface';

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

  arreglo = [ 
    {nombre:'Andres'},
    {nombre:'Tomas'},
    {nombre:'Juan'} 
  ]

  constructor() { }

  ngOnInit(): void {

    this.arreglo.find(x => x.nombre === 'Andres');
    console.log(this.arreglo);
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
