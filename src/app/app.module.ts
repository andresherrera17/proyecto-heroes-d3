import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { RouterModule } from '@angular/router';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

//Decorador: Empieza con @, es una funcion comun y corriente
@NgModule({
  //Declarar Componentes, Pipes y Directivas
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    ContrasenaPipe
  ],
  //Importar las librerias
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  //Declarar nuestros servicios
  providers: [],
  //Cual es el componente que se va a ejecutar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
