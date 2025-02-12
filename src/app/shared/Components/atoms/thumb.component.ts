import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-thumb',
    standalone:true,
    template:`
        <picture class="block" [class]="class">
            <img class="object-cover w-full h-full" [src]="imgUrl" [alt]="alt || 'descripcion sunqudigital'" />
        </picture>`
})

export class ThumbComponent{
    @Input({required:true}) imgUrl!: string;
    @Input({required:false}) alt!: string;
    @Input({required:false}) class!: string;
}