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
          class="flex laptop:flex-row flex-col items-center justify-center gap-[5rem]"
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
        'https://scontent.flim38-1.fna.fbcdn.net/v/t39.30808-6/472735060_457781107394492_4773691668392770581_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH0YEJEWaHMdqAEuQpUZtUC8wENqCEye5rzAQ2oITJ7mkuNf6EqH46JWyPSZBNTJ5b19a7Vqrvoudw4DjahF08x&_nc_ohc=sLCDowtxeKIQ7kNvgGr7pam&_nc_oc=AdhG_CTMVVsi8OduxxtwNy7itNKAToe3Kg_z0mFOtNcMeijXEhiz4wUgTEj11Y7lnEM&_nc_zt=23&_nc_ht=scontent.flim38-1.fna&_nc_gid=AnxmRPLcfaTxJqN5FDvXA2Q&oh=00_AYCPFkCqDGy8dz_Yc6TL74gSxpCv-hG_RozpfkEWLiwv9A&oe=67BFD1D2',
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
