import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito [];

}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  nuevoJuego: string = "";

  persona: Persona = {
    nombre: 'Angel',
    favoritos: [
      {
        id: 1,
        nombre: 'Donkey Kong Country'
      },
      {
        id: 2,
        nombre: 'Fortnite'
      }
    ]
  }


  @ViewChild('miFormulario') miFormulario!: NgForm;

  guardar() {
    console.log(this.miFormulario)
  }

  nombreValido(){
    return this.miFormulario?.controls['persona']?.invalid && this.miFormulario?.controls['persona']?.touched
  }

  agregarJuego() {
    const nuevoFavorito: Favorito  = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }

    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)
  }
}
