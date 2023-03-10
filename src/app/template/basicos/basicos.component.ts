import { Component, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Pan con pollo',
    precio: 5,
    existencias: 525
  }

  guardar() {
    console.log('Posteo correcto')
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      producto: 'Torta de Galleta',
      precio: 0,
      existencias: 0,
    })
  }

  nombreValido() : boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }
  precioValido() : boolean {
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0
  }
}
