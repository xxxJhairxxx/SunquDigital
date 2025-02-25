import { Component, Input } from '@angular/core';
import { splitText } from '../../utils/string.utils';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <div  [class]="center ? 'mx-auto flex flex-col items-center justify-center text-center w-fit' :''">
      <div [class]="center && 'text-center'" >
        <h3
          class="w-fit relative tag uppercase font-[600] text-subtitle text-primary px-[5rem] py-[4rem]"
        >
          {{ subtitle }}
        </h3>
      </div>
      <h2
        class="text-title  leading-[6rem] font-primary font-bold "
        [class]="white ? 'text-white' : 'text-black'"
      >
        @for (item of decorationTitle; track $index ){
        <span class="[&:nth-child(2)]:text-primary">{{ item }}</span>
        }
      </h2>
    </div>
  `,
  styles: `
      .tag::before {
        position: absolute;
        content: '';
        background: #fff8f9;
        left: 1.5rem;
        top: 50%;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        z-index: -1;
        transform: translateY(-50%);
      }
      .tag::after {
        position: absolute;
        content: '';
        height: 0.2rem;
        width: 3rem;
        background: #ed2c41;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    `,
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: false }) subtitle!: string;
  @Input({ required: false }) white!: boolean;
  @Input({ required: false }) center!: boolean;

  decorationTitle: string[] = [];

  ngOnInit() {
    if (this.title) {
      this.decorationTitle = splitText(this.title);
    }
  }
}
