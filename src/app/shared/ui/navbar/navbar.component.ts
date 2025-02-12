import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports:[NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
   menu : Array<string> = ['Home','Compañia','Portafolio','Blog','Contacto'];

   
}
