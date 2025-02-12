import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { ContainerComponent } from '../../globals/container.component';
import { ThumbComponent } from '../../atoms/thumb.component';
import { splitText } from '../../../utils/string.utils';
import { buttonComponent } from "../../atoms/button.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, ContainerComponent, ThumbComponent, buttonComponent],
  template: `
    <Header class="h-[100vh] w-full flex items-center justify-center">
      <app-navbar />

      <app-container class="w-full flex items-center justify-between pt-[4rem]">
        <app-thumb
          class="h-[65vh]"
          imgUrl="/assets/images/perfi-header.png"
          alt="girl with celphone"
        />
        <div class="h-[40rem] flex flex-col justify-center">
          <h1 class=" text-[8rem] w-[48rem]  leading-[10rem] font-primary font-bold text-white">
            @for (item of decorationTitle; track $index ){
              <span class="[&:nth-child(2)]:text-primary">{{item}}</span>
            }  
          </h1>

            <p class="text-white text-[1.8rem] leading-[3.5rem] w-[52rem] ">
              {{text}}
            </p>

            <app-button class="my-10">Comencemos</app-button>
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
