import { Component } from '@angular/core';
import { ContainerComponent } from '../globals/container.component';
import { TitleComponent } from '../atoms/title.component';
import { TeamCardComponent } from '../molecules/teamCard.component';

@Component({
  selector: 'section-team',
  template: `
    <section class="py-[8rem]">
      <app-container>
        <app-title [title]="title" [subtitle]="subtitle" [center]="true" />

        <ul
          class="flex laptop:flex-row flex-col items-center py-[4rem] justify-center gap-[5rem]"
        >
          @for (item of team; track item.id) {
          <card-team
            [image]="item.image"
            [name]="item.name"
            [ocupation]="item.ocupation"
            [socialNetwork]="item.socialNetwork"
          />
          }
        </ul>
      </app-container>
    </section>
  `,
  imports: [ContainerComponent, TitleComponent, TeamCardComponent],
})
export class TeamComponent {
  title = 'MEET THE EXPERT *TEAM*';
  subtitle = 'our team';

  team = [
    {
      id: 1,
      image:
        'https://i.postimg.cc/654SmQkC/472735060-457781107394492-4773691668392770581-n.jpg',
      name: 'Jhair Infanzon',
      ocupation: 'Web Developer',
      socialNetwork: [
        { social: 'fb', url: '' },
        { social: 'x', url: '' },
        { social: 'in', url: '' },
      ],
    },
    {
      id: 2,
      image:
        'https://i.postimg.cc/q7Mz6Cfy/418928236-7063471700416045-2036446933852169302-n-removebg-preview.png',
      name: 'Christian Mallqui',
      ocupation: 'HR Manager',
      socialNetwork: [
        { social: 'fb', url: '' },
        { social: 'x', url: '' },
        { social: 'in', url: '' },
      ],
    },
  ];
}
