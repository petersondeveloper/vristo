import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    
    selector: 'icon-info-triangle',
    template: `
        <ng-template #template>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    opacity="0.5"
                    d="M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>
        </ng-template>
    `,
})
export class IconInfoTriangleComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
