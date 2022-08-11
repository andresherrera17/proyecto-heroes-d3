import { Component, OnInit } from '@angular/core';
import { IPersona } from '../interfaces/persona.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:IPersona = {} as IPersona;

  constructor(private _serviceLogin: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this._serviceLogin.login(this.usuario);
  }
}
