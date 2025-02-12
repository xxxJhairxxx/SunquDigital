import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <section [class]="'mx-auto max-w-[110rem] laptop:w-full w-[92%] '+class">
      <ng-content />
    </section>
  `,
})
export class ContainerComponent {
  @Input({ required: false }) class!: string;
}
