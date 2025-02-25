import { Component } from "@angular/core";

@Component({
    selector: 'app-button',
    template:`
        <button class="bg-primary font-[500] flex justify-between text-white items-center px-[4rem] gap-[1rem] py-[1.5rem] text-">
        <ng-content/>
             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M0 10.5H2L7 5.5L2 0.5H0L5 5.5L0 10.5Z" fill="white"/>
                <path d="M4 10.5H6L11 5.5L6 0.5H4L9 5.5L4 10.5Z" fill="white"/>
                </svg>
        </button>
    `
})
export class buttonComponent{}
