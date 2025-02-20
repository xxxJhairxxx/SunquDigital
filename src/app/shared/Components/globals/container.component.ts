import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <section [class]="'mx-auto laptop:w-full laptop:max-w-[125rem] desktop:max-w-[140rem] w-[92%] '+class">
      <ng-content />
    </section>
  `,
})
export class ContainerComponent {
  @Input({ required: false }) class!: string;
}
