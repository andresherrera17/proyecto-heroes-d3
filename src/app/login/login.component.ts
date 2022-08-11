import { Component, OnInit } from '@angular/core';
import { IPersona } from '../interfaces/persona.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    let usuario:IPersona = {
      nombre: 'Andres',
      apellido: 'Herrera'
    }
    this._serviceLogin.login(usuario);
  }
}
