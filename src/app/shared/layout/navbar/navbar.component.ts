import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';


interface IRouter{
  name:string;
  url:string
}


@Component({
  selector: 'app-navbar',
  template: `<nav
      class=" z-[999] bg-black w-full laptop:py-2 text-text h-[6rem] text-white fixed laptop:flex top-0 left-0 transition-observer"
      [class]="isAtTop ? 'laptop:bg-transparent' : 'laptop:bg-black '"
    >
      <div
        class="w-full h-full sticky max-w-[145rem] flex flex-col laptop:flex-row mx-auto items-start laptop:items-center laptop:justify-between "
      >
        <div
          class=" z-[10]  full py-[0rem] px-[3rem] w-full flex items-center bg-black laptop:bg-transparent"
          imgUrl="/assets/images/logo.png"
        >
        <a routerLink="/">
        <img
            class="h-[90%]"
            src="/assets/images/logo.png"
            alt="logo sunqudigital"
          />
        </a>
          
        </div>

        <ul
          [class]="this.isActive ? 'isActive' : ''"
          class="Navbar top-0 z-[1] flex w-full laptop:w-auto  laptop:flex-row rounded-b-4xl laptop:items-center flex-col bg-black laptop:!bg-transparent laptop:gap-8 pb-6 laptop:pb-0 "
        >
          @for(item of menu;track $index){
          <li
            class="cursor-pointer laptop:border-0 border-t-[0.01rem] border-gray-600 py-[0.8rem] laptop:w-fit w-full px-[3rem] laptop:p-0"
          >
            <a [routerLink]="'/'+item.url"> {{ item.name }}</a>
          </li>
          }
        </ul>
        <button
          class="menu-icon hamburguer absolute z-[50] top-0 right-0"
          [class]="this.isActive ? 'change' : ''"
          (click)="toggleMenu()"
        >
          <span class="span"></span>
          <span class="span"></span>
          <span class="span"></span>
        </button>
      </div>
    </nav>

    <div #trigger class="h-0 laptop:h1 z-[5] absolute top-0 left-0"></div> `,
  styles: `
  .transition-observer{
    transition: background .25s ease-in;
  }

  .menu-icon {
  --menu-size: 5.8rem;
  &.hamburguer {
    height: 6rem;
    width: 5.8rem;
    transition: background-color 0.4s ease;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    @media (min-width:1200px){
      display:none;
    }

    .span {
      height: 0.27rem;
      width: 2.5rem;
      transition: transform 0.4s ease;
      background:white;
      display: inline-block;
      position:Absolute;
      margin: 0 auto;
    }
    .span:nth-child(1) {
      transform: translateY(-0.8rem);
    }
    .span:nth-child(3) {
      transform: translateY(0.8rem);
    }
    /* Animacion cuando "isActive" es true */
    &.change {
      background:transparent;
      &::before {
        content: "";
        width:3.5rem;
        height:3.5rem;
        border-radius:100%;
        border: 2px solid white;
      }
      .span {
        width: 1.8rem;
      }
      .span:nth-child(1) {
        transform: rotateZ(42.19deg);
     background:white
      }

      .span:nth-child(2) {
        opacity:0%
      }

      .span:nth-child(3) {
        transform: rotateZ(-42.19deg);
        background:white
      }
    }
  }

  &.close {
    width: var(--menu-size);
    height: var(--menu-size);
    background:transparent;
    position:relative;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items:center;
  
    @media (min-width:1200px){
      display:none
    }
    .span {
      width: 2.5rem;
      height: 0.25rem;
      border-radius: 2px;
     background: white;
     display:inline-block;
     position:absolute
    }

    .span:nth-child(1) {
      transform: rotateZ(42.19deg);
    }

    .span:nth-child(2) {
      display:none
    }

    .span:nth-child(3) {
      transform: rotateZ(-42.19deg);
    }
  }
}

.Navbar {
  transform: translateY(-120%);
  transition: transform 0.3s ease;
  @media (min-width:1200px){
    transform: translateY(0);
    }
  &.isActive {
    transform: translateY(0);
  }
}
  `,
  imports: [RouterModule],
})
export class NavbarComponent implements AfterViewInit {
  menu: Array<IRouter> = [
    {name :'Home',url:'/'},
     {name :'Compañia',url:'/company'},
      {name :'Portafolio',url:'/portfolio'},
       {name :'Blog',url:'/blog'},
        {name :'Contacto',url:'/contact'}];

  isAtTop: boolean = true;
  isActive: boolean = false;

  @ViewChild('trigger', { static: false }) trigger!: ElementRef;

  observer!: IntersectionObserver;

  constructor() {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isAtTop = entry.isIntersecting;
        });
      },
      { threshold: [0] }
    );
    this.observer.observe(this.trigger.nativeElement);
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
    document.body.classList.toggle('no-scroll');
  }
}
