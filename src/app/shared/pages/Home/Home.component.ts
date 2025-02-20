import { Component } from "@angular/core";
import { HeaderComponent } from "../../layout/header/header.component";
import { ServicioComponent } from "../../Components/organisms/sercicios.component";
import { AboutComponent } from "../../Components/organisms/about.component";
import { WhyChooseComponent } from "../../Components/organisms/why-choose.component";

@Component({
    selector:'page-home',
    standalone:true,
    template:`
    <section-header />
    <section-servicios />
    <section-about />
    <section-why-choose />
    `,
    imports: [HeaderComponent, ServicioComponent, AboutComponent, WhyChooseComponent],
})

export default class HomeComponent{

   
}