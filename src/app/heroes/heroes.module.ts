import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroeFormComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
