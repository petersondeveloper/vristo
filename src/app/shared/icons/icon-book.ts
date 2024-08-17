import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    
    selector: 'icon-book',
    template: `
        <ng-template #template>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path
                    opacity="0.5"
                    d="M6.12132 16.1022L5.92721 15.3778L6.12132 16.1022ZM3.27556 18.0294C3.16835 18.4295 3.40579 18.8408 3.80589 18.948C4.20599 19.0552 4.61724 18.8178 4.72444 18.4177L3.27556 18.0294ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5H7.75ZM7.89778 16.75H19.8978V15.25H7.89778V16.75ZM7.89778 15.25C7.01609 15.25 6.42812 15.2436 5.92721 15.3778L6.31543 16.8267C6.57752 16.7564 6.91952 16.75 7.89778 16.75V15.25ZM5.92721 15.3778C4.63311 15.7245 3.62231 16.7353 3.27556 18.0294L4.72444 18.4177C4.9325 17.6412 5.53898 17.0347 6.31543 16.8267L5.92721 15.3778ZM7.75 16V2.5H6.25V16H7.75Z"
                    fill="currentColor"
                />
            </svg>
        </ng-template>
    `,
})
export class IconBookComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
