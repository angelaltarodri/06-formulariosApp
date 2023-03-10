import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './template/switches'
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: 'basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'switches',
      ruta: './reactive/switches'
    },
  ]

  authMenu: MenuItem[] = [
    {
      texto: 'registro',
      ruta: './auth/registro'
    },
    {
      texto: 'login',
      ruta: './auth/login'
    },
  ]

}
