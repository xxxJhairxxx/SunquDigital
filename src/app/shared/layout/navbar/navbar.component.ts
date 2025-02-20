import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: `<nav class=' z-[999]  w-full bg-black py-2 text-[1.6rem] text-white fixed top-0 left-0'>
    <ul class='flex w-full max-w-[145rem] gap-8 mx-auto items-center '>
        <li class='mr-auto cursor-pointer'><img src="/assets/images/logo.png"  alt=""></li>
        @for(item of menu;track $index){
          <li class="cursor-pointer" >{{ item }}</li>
        }
        
    </ul>
</nav>
`
})
export class NavbarComponent {
   menu : Array<string> = ['Home','Compañia','Portafolio','Blog','Contacto'];

   
}
