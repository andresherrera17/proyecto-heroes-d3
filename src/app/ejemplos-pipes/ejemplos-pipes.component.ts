import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre:string = "Andres";
  PI:number = Math.PI;
  porcentaje: number = 0.25;
  salario:number = 1234.5;
  fecha:Date = new Date();
  isShow:boolean = false;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 3000);
  });

  heroe =  {
    nombre: 'logan',
    edad: 1000,
    otrosNombres: {
      nombre: 'wolverine' 
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  darClick(){
    alert('Bienvenido');
  }

}
