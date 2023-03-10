import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    // email: [ 'valor inicial', [validaciones sincronas], [validaciones asincronas]]
    email: ['', [ Validators.required, Validators.pattern(this.validatorService.emailPattern)], [ this.emailValidator]],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    password2: ['', [ Validators.required]],
  }, {
    validators: [
      this.validatorService.camposIguales('password', 'password2')
    ]
  });

  get emailErrorMessage(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.['required']) {
      return 'Email es obligatorio.';
    } else if ( errors?.['pattern'] ) {
      return 'El valor ingresado no tiene formato de correo.'
    } else if ( errors?.['emailTomado'] ) {
      return 'El email ya ha sido tomado.'
    }

    return ''
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Angel ALtamirano',
      email: 'test1@test.com',
      username: 'bizcocho',
      password: '123456',
      password2: '123456',
    })
  }

  campoNoValido( campo : string) {
    return this.miFormulario.get( campo )?.invalid && this.miFormulario.get( campo )?.touched;
  }

  // emailRequired () {
  //   return  this.miFormulario.get( 'email' )?.errors?.["required"]
  //           &&
  //           this.miFormulario.get( 'email' )?.touched
  // }
  // emailFormato () {
  //   return  this.miFormulario.get( 'email' )?.errors?.["pattern"]
  //           &&
  //           this.miFormulario.get( 'email' )?.touched
  // }
  // emailTomado () {
  //   return  this.miFormulario.get( 'email' )?.errors?.["emailTomado"]
  //           &&
  //           this.miFormulario.get( 'email' )?.touched
  // }



  submitFormulario () {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
