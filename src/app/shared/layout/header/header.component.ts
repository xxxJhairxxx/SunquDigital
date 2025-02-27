import { Component } from '@angular/core';
import { ContainerComponent } from '../../Components/globals/container.component';
import { ThumbComponent } from '../../Components/atoms/thumb.component';
import { splitText } from '../../utils/string.utils';
import { buttonComponent } from "../../Components/atoms/button.component";

@Component({
  selector: 'section-header',
  imports: [ContainerComponent, ThumbComponent, buttonComponent],
  template: `
    <Header class="h-[100vh] w-full flex items-center laptop:justify-center ">
      <app-container class="  laptop:w-full  mx-auto flex laptop:flex-row  flex-col-reverse   laptop:items-center laptop:justify-evenly gap-[2em] pt-[4rem]">
        <app-thumb
          class="laptop:h-[65vh] tablet:w-[80%] mx-auto laptop:mx-0 w-[100%] laptop:w-auto max-h-[60rem]  "
          imgUrl="/assets/images/perfi-header.png"
          alt="girl with celphone"
        />
        <div class="laptop:h-[40rem] flex flex-col  gap-[0.8em]">
          <h1 class=" text-titular laptop:w-[48rem]  leading-[1.2em] font-primary font-bold text-white">
            @for (item of decorationTitle; track $index ){
              <span class="[&:nth-child(2)]:text-primary">{{item}}</span>
            }  
          </h1>

            <p class="text-white text-subtitle leading-[1.8em] laptop:w-[52rem] ">
              {{text}}
            </p>

            <app-button class="my-[1em] hidden">Comencemos</app-button>
        </div>

      </app-container>

      <app-thumb class="w-full h-[100vh] absolute -z-1 left-0 top-0" imgUrl="/assets/images/header.jpg" />
    </Header>
  `,
})
export class HeaderComponent {

  title= "GROW UP YOUR *ONLINE* BUSSINES";
  text ="Phosfluorescently engage client-based action items this a niche markets. Credibly disintermediate.";


  decorationTitle=splitText(this.title);

}
