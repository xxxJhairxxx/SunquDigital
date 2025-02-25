import { Component, Input } from '@angular/core';
import { ThumbComponent } from '../atoms/thumb.component';

interface network {
  social: string;
  url: string;
}

@Component({
  selector: 'card-team',
  template: ` <article class="w-[20rem] text-center ">
    <app-thumb [imgUrl]="image"></app-thumb>
    <section class="py-6">
      <h4 class="text-[2.5rem] font-bold font-primary">{{ name }}</h4>
      <h3>{{ ocupation }}</h3>
    </section>
  </article>`,
  imports: [ThumbComponent],
})
export class TeamCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() ocupation!: string;
  @Input() socialNetwork!: network[];
}
