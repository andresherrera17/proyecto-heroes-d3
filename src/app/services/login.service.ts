import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPersona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario$: Subject<IPersona>;


  constructor() {
    this.usuario$ = new Subject();
  }

  login(persona:IPersona){
    this.usuario$.next(persona);
  }
}
