import { TitleComponent } from '../atoms/title.component';
import { Component } from '@angular/core';
import { ContainerComponent } from '../globals/container.component';
import { ThumbComponent } from '../atoms/thumb.component';

@Component({
  selector: 'section-about',
  template: `
    <section class=" relative z-[5] mt-[-15rem]">
      <app-thumb
        class="absolute z-[-1] top-0 left-0 w-full h-full"
        imgUrl="../../../../assets/images/about.jpg"
      />
      <app-container
        class="flex items-center justify-center gap-[10%]  pt-[10rem] pb-[3.5rem]"
      >
        <app-thumb imgUrl="../../../../assets/images/about2.png" />
        <div class="w-[53.5rem] flex flex-col justify-center gap-5">
          <app-title [title]="title" [subtitle]="subtitle" [white]="true" />

          <p class="text-white leading-[3rem]">
            {{ text }}
          </p>

          <ul class="text-white flex flex-col gap-6 py-5">
            @for(item of list; track $index){
              <li class="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <rect
                  y="0.166748"
                  width="15"
                  height="15"
                  rx="7.5"
                  fill="#ED2C41"
                />
                <path
                  d="M6.3752 11.1667L3 7.66634L4.1248 6.50008L6.3752 8.83259L10.8744 4.16675L12 5.33383L6.3752 11.1667Z"
                  fill="black"
                />
              </svg>
              <p>{{item}}</p>
            </li>
            }
            
          </ul>
        </div>
      </app-container>
    </section>
  `,
  imports: [ContainerComponent, ThumbComponent, TitleComponent],
})
export class AboutComponent {
  subtitle = 'Nosotros';
  title = 'TECHNO IS THE BEST IT AGENCY *IN WORLD*';
  text =
    'Dramatically enable economically sound information for mission-critical deliverables. Completely impact resource-leveling systems vis-a-vis clie focused leadership for real methodologies supported.';
  list = ['Suspe ndisse suscipit sagittis special','Distinctively maintain orthogonal field','Proactively extend functionalized donate']
  }
