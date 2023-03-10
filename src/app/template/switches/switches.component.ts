import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {
  persona = {
    genero: 'F',
    notificaciones: false,

  }

  terminosYCondiciones = false;
}
