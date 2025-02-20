import { Component, Input } from '@angular/core';
interface Iserviciocard {
  imgUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-serviciocard',
  template: ` <style>
      .decoration::before {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 4rem;
        height: 0.2rem;
        background: #fb2c36;
      }
    </style>

    <article class="flex flex-col w-[30rem] gap-7 shadow-card px-16 py-10 rounded-2xl bg-white">
      <div class="w-[8rem] h-[8rem] p-8 my-4 rounded-full bg-red-500/5">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 22"
        fill="none"
      >
        <path
          d="M12.4999 16.0562C10.0699 16.0562 8.09995 14.2452 8.09995 12.0113C8.09995 9.77729 10.0699 7.96631 12.4999 7.96631C14.93 7.96631 16.8999 9.77729 16.8999 12.0113C16.8999 14.2452 14.93 16.0562 12.4999 16.0562Z"
          stroke="#ED2C41"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 4.93264C11.285 4.93264 10.3 4.02715 10.3 2.91017C10.3 1.79319 11.285 0.887695 12.5 0.887695C13.715 0.887695 14.7 1.79319 14.7 2.91017C14.7 4.02715 13.715 4.93264 12.5 4.93264Z"
          stroke="#ED2C41"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.3 21.1124C20.085 21.1124 19.1 20.207 19.1 19.09C19.1 17.973 20.085 17.0675 21.3 17.0675C22.515 17.0675 23.5 17.973 23.5 19.09C23.5 20.207 22.515 21.1124 21.3 21.1124Z"
          stroke="#ED2C41"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.69995 21.1124C2.48492 21.1124 1.49995 20.207 1.49995 19.09C1.49995 17.973 2.48492 17.0675 3.69995 17.0675C4.91497 17.0675 5.89995 17.973 5.89995 19.09C5.89995 20.207 4.91497 21.1124 3.69995 21.1124Z"
          stroke="#ED2C41"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.4999 7.96633V4.93262M5.34995 17.5731L9.19995 15.045M19.6499 17.5731L15.7999 15.045"
          stroke="#ED2C41"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        </svg>
      </div>
      
      <h3
        class="text-[2.9rem] font-[700] text-black font-primary leading-[3.5rem] relative decoration"
      >
        {{ serviciocard.title }}
      </h3>
      <p class="leading-[3rem] text-[1.8rem]">{{ serviciocard.description }}</p>
      <button
        class="flex w-fit gap-3 items-center font-[400] py-[0.5rem] my-[0.5rem]"
      >
        <span>Read More</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path d="M0 10.5H2L7 5.5L2 0.5H0L5 5.5L0 10.5Z" fill="black" />
          <path d="M4 10.5H6L11 5.5L6 0.5H4L9 5.5L4 10.5Z" fill="black" />
        </svg>
      </button>
    </article>`
})
export class ServicioCardComponent {
  @Input() serviciocard!: Iserviciocard;
}
