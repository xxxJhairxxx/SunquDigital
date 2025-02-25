import { Component } from '@angular/core';
import { ContainerComponent } from '../globals/container.component';
import { TitleComponent } from '../atoms/title.component';
import { ThumbComponent } from '../atoms/thumb.component';

@Component({
  selector: 'section-why-choose',
  template: `
    <section class=" relative">
     <app-thumb class="absolute z-[-1] w-full h-full left-0 right-0" imgUrl="../../../../assets/images/why-choose.jpg" />
      <app-container class="flex laptop:flex-row flex-col justify-center gap-[10%] py-[6rem]">
        <div class="laptop:w-[35%]">
          <app-title
            class=" bg-red-500"
            [title]="title1"
            [subtitle]="subtitle1"
          />
          <p>{{ text1 }}</p>
        </div>
        <div class="laptop:w-[50%]">
          <ul class="flex  border-b-3 border-primary">
            @for(item of menu;track $index){
            <li
              (click)="activeTab = item.title"
              [class]="activeTab === item.title ? 'bg-primary text-white' : ''"
              class="cursor-pointer px-8 pt-4 pb-3 text-xl font-[500] text-black"
            >
              {{ item.title }}
            </li>
            }
          </ul>
          <div class="pb-10 px-12 pt-12 leading-[3rem] flex flex-col gap-7">
            {{ activeContent?.text }}
            <div class="flex laptop:flex-row flex-col gap-7">
              <app-thumb class="w-[20rem]" [imgUrl]="activeContent!.image" />
              <ul>
                @for(element of activeContent?.items;track $index ){
                <li class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                  >
                    <path
                      d="M17 2L7 12L2 7"
                      stroke="#ED2C41"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ element }}
                </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </app-container>
    </section>
  `,
  imports: [ContainerComponent, TitleComponent, ThumbComponent],
})
export class WhyChooseComponent {
  title1 = 'YOU CAN GET THE BEST ALL DESIGN *SOLUTIONS*';
  subtitle1 = 'WHY CHOOSE US';
  text1 =
    'Dramatically enable is a economically sound information deliverables is a completely impact resource-leveling the focussed leadership for a reals methodologies supported digital agency techno.';

  menu = [
    {
      title: 'FULL SATISFACTION',
      text: 'Competently synergize user friendly is networks through is a multifunctional initiatives. Seamlessly pursue an tactical methods of the empowerment vis-a visternative customers.',
      image:
        'https://wp.ditsolution.net/technodigital/wp-content/uploads/2021/09/tab.jpg',
      items: [
        'Rather than unique Idea.',
        'Entums estibulum dignissim posuere',
        'Quality users after Breed Applications',
        'Market Positioning Expertise',
      ],
    },
    {
      title: 'EXPERT TEAM',
      text: 'Competently synergize user friendly is networks through is a multifunctional initiatives. Seamlessly pursue an tactical methods of the empowerment vis-a visternative customers.',
      image:
        'https://wp.ditsolution.net/technodigital/wp-content/uploads/2021/09/tab2.jpg',
      items: [
        'Rather than unique Idea.',
        'Entums estibulum dignissim posuere',
        'Quality users after Breed Applications',
        'Market Positioning Expertise',
      ],
    },
    {
      title: 'MISSION & VISION',
      text: 'Competently synergize user friendly is networks through is a multifunctional initiatives. Seamlessly pursue an tactical methods of the empowerment vis-a visternative customers.',
      image:
        'https://wp.ditsolution.net/technodigital/wp-content/uploads/2021/09/tab.jpg',
      items: [
        'Rather than unique Idea.',
        'Entums estibulum dignissim posuere',
        'Quality users after Breed Applications',
        'Market Positioning Expertise',
      ],
    },
  ];

  activeTab = this.menu[0].title;

  get activeContent() {
    return this.menu.find((item) => item.title === this.activeTab);
  }
}
