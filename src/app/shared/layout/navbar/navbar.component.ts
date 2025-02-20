import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-navbar',
  template: `<nav
    class=" z-[999]  w-full py-2 text-[1.6rem] text-white fixed top-0 left-0 transition-observer"
    [class]="isAtTop ? 'bg-transparent' : 'bg-black '"
  >
    <ul class="flex w-full max-w-[145rem] gap-8 mx-auto items-center ">
      <li class="mr-auto cursor-pointer">
        <img src="/assets/images/logo.png" alt="" />
      </li>
      @for(item of menu;track $index){
      <li class="cursor-pointer">{{ item }}</li>
      }
    </ul>
  </nav> <div #trigger class="h-1 absolute"></div>`,
  styles:`
  .transition-observer{
    transition: background .25s ease-in;
  }
  `
})
export class NavbarComponent implements AfterViewInit{
  menu: Array<string> = ['Home', 'Compañia', 'Portafolio', 'Blog', 'Contacto'];

  isAtTop: boolean = true;

  @ViewChild('trigger', { static: false }) trigger!: ElementRef;
  observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          this.isAtTop = entry.isIntersecting;
        });
      },
      { threshold: [0] }
    );
    this.observer.observe(this.trigger.nativeElement);
  }


}
