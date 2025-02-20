import { Component } from '@angular/core';
import { ContainerComponent } from '../globals/container.component';
import { TitleComponent } from '../atoms/title.component';
import { ServicioCardComponent } from '../molecules/servicioCard.component';

interface Iserviciocard {
  imgUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'section-servicios',
  template: `
    <section class="z-[20] relative">
      <app-container class="py-[5rem]">
        <div class="flex items-center justify-center gap-[10%] py-[4rem]">
          <app-title class="w-[100%]" [title]="title" [subtitle]="subtitle" />

          <p class="text-[1.7rem]">{{ text }}</p>
        </div>
        <div class="bg+red+2 flex w-full justify-between gap-[1%] relative z-20">
          @for(item of serviciocard;track $index){
          <app-serviciocard [serviciocard]="item" />
          }
        </div>
      </app-container>
    </section>
  `,

  imports: [ContainerComponent, TitleComponent, ServicioCardComponent],
})
export class ServicioComponent {
  subtitle = 'Servicios';
  title = 'WE SERVE THE PERFECT PIXEL *IT SOLUTION*';
  text =
    'Uniquely unleash client-centered relationships and world-class alignments Compellingly impact premier enterprise quality vectors whereas client has functionalities. Seamlessly benchmark';

  serviciocard: Iserviciocard[] = [
    { imgUrl: '', title: 'DIGITAL SEO CONSULTANCY', description: 'Dramatically simplify to proof a data before high mindshare done.' },
    { imgUrl: '', title: 'APPS INTERFACE DESIGN', description: 'Dramatically simplify to proof a data before high mindshare done.' },
    { imgUrl: '', title: 'WEBSITE DEVELOPMENT', description: 'Dramatically simplify to proof a data before high mindshare done.' },
    { imgUrl: '', title: 'UI DATABASE DESIGN', description: 'Dramatically simplify to proof a data before high mindshare done.' },
  ];
}
