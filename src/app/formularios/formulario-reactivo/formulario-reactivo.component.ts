import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(){
    this.form = this.formBuilder.group({
      nombre : ['',Validators.required],
      apellido: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required, this.validarContrasena]],
      pais: [''],
      direccion: this.formBuilder.group({
        calle: ['',Validators.required],
        avenida: ['',Validators.required]
      })
    });
  }

  validarContrasena(control: AbstractControl){
    const contrasena:string = control.value;
    let error = null;
    if(!contrasena.includes('$')){
      error = { pesos:'Es requerido el signo pesos' }
    }
    if(!parseFloat(contrasena[0])){
      error = { ...error, number:'Debe empezar con un número' }
    }

    return error;
  }

  guardar(){
    console.log(this.form);
  }

  get usuarioRequired(){
    if(this.nombre?.errors){
      return this.nombre?.errors["required"];
    }else{
      return false;
    }
  }

  getError(controlName:string){
    let error = null;
    const control = this.form.get(controlName);
    if(control?.errors != null){
      error = control?.errors;
    }

    return error;
  }

  get nombre(): AbstractControl | null { return this.form.get('nombre')};
  get apellido(): AbstractControl | null { return this.form.get('apellido')};
}
