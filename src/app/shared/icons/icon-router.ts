import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    
    selector: 'icon-router',
    template: `
        <ng-template #template>
            <svg *ngIf="fill" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M9.33317 18.6667C8.78089 18.6667 8.33317 19.1144 8.33317 19.6667C8.33317 20.219 8.78089 20.6667 9.33317 20.6667C9.88546 20.6667 10.3332 20.219 10.3332 19.6667C10.3332 19.1144 9.88546 18.6667 9.33317 18.6667Z"
                    fill="currentColor"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.6665 19.6667C2.6665 15.9848 5.65127 13 9.33317 13H22.6665C26.3484 13 29.3332 15.9848 29.3332 19.6667C29.3332 23.3486 26.3484 26.3333 22.6665 26.3333H9.33317C5.65127 26.3333 2.6665 23.3486 2.6665 19.6667ZM6.33317 19.6667C6.33317 18.0098 7.67632 16.6667 9.33317 16.6667C10.99 16.6667 12.3332 18.0098 12.3332 19.6667C12.3332 21.3235 10.99 22.6667 9.33317 22.6667C7.67632 22.6667 6.33317 21.3235 6.33317 19.6667ZM15.9998 18.6667C15.4476 18.6667 14.9998 19.1144 14.9998 19.6667C14.9998 20.219 15.4476 20.6667 15.9998 20.6667H24.6665C25.2188 20.6667 25.6665 20.219 25.6665 19.6667C25.6665 19.1144 25.2188 18.6667 24.6665 18.6667H15.9998Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.5"
                    d="M7.29157 26.0146L5.80916 28.4853C5.52501 28.9589 5.67858 29.5732 6.15216 29.8573C6.62574 30.1415 7.24 29.9879 7.52415 29.5143L9.43285 26.3331H9.33339C8.62118 26.3331 7.93505 26.2215 7.29157 26.0146Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.5"
                    d="M22.5674 26.3331L24.4761 29.5143C24.7602 29.9879 25.3745 30.1415 25.8481 29.8573C26.3217 29.5732 26.4752 28.9589 26.1911 28.4853L24.7087 26.0146C24.0652 26.2215 23.3791 26.3331 22.6668 26.3331H22.5674Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.4"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.9996 4.6665C19.3611 4.6665 17.0971 6.28026 16.1454 8.57849C15.934 9.08875 15.3491 9.33108 14.8388 9.11977C14.3286 8.90845 14.0862 8.3235 14.2975 7.81324C15.5481 4.7937 18.5242 2.6665 21.9996 2.6665C25.475 2.6665 28.4512 4.7937 29.7017 7.81324C29.913 8.3235 29.6707 8.90845 29.1604 9.11977C28.6502 9.33108 28.0652 9.08875 27.8539 8.57849C26.9021 6.28026 24.6382 4.6665 21.9996 4.6665Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.7"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0008 8C20.6377 8 19.4845 8.90993 19.1204 10.1576C18.9657 10.6878 18.4105 10.9921 17.8803 10.8374C17.3501 10.6827 17.0457 10.1275 17.2005 9.59735C17.8068 7.51959 19.725 6 22.0008 6C24.2765 6 26.1948 7.51959 26.8011 9.59735C26.9558 10.1275 26.6514 10.6827 26.1212 10.8374C25.5911 10.9921 25.0359 10.6878 24.8811 10.1576C24.5171 8.90993 23.3639 8 22.0008 8Z"
                    fill="currentColor"
                />
                <path
                    d="M23.3332 10.3333C23.3332 11.0697 22.7362 11.6667 21.9998 11.6667C21.2635 11.6667 20.6665 11.0697 20.6665 10.3333C20.6665 9.59695 21.2635 9 21.9998 9C22.7362 9 23.3332 9.59695 23.3332 10.3333Z"
                    fill="currentColor"
                />
            </svg>

            <svg *ngIf="!fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [ngClass]="class">
                <path
                    d="M2 15C2 12.2386 4.23858 10 7 10H17C19.7614 10 22 12.2386 22 15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path
                    opacity="0.5"
                    d="M18.3292 22.3354C18.5144 22.7059 18.9649 22.8561 19.3354 22.6708C19.7059 22.4856 19.8561 22.0351 19.6708 21.6646L18.3292 22.3354ZM17.3292 20.3354L18.3292 22.3354L19.6708 21.6646L18.6708 19.6646L17.3292 20.3354Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.5"
                    d="M5.67082 22.3354C5.48558 22.7059 5.03507 22.8561 4.66459 22.6708C4.29411 22.4856 4.14394 22.0351 4.32918 21.6646L5.67082 22.3354ZM6.67082 20.3354L5.67082 22.3354L4.32918 21.6646L5.32918 19.6646L6.67082 20.3354Z"
                    fill="currentColor"
                />
                <path
                    d="M8.5 15C8.5 15.8284 7.82843 16.5 7 16.5C6.17157 16.5 5.5 15.8284 5.5 15C5.5 14.1716 6.17157 13.5 7 13.5C7.82843 13.5 8.5 14.1716 8.5 15Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                />
                <path opacity="0.5" d="M12 15H18.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path
                    opacity="0.4"
                    d="M21.5833 5.39702C20.7574 3.40286 18.7924 2 16.4996 2C14.2069 2 12.2419 3.40286 11.416 5.39702"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    opacity="0.7"
                    d="M19.3806 6.65811C19.0167 5.41107 17.865 4.5 16.5004 4.5C15.1358 4.5 13.984 5.41107 13.6201 6.65811"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M17.5 7C17.5 7.55228 17.0523 8 16.5 8C15.9477 8 15.5 7.55228 15.5 7C15.5 6.44772 15.9477 6 16.5 6C17.0523 6 17.5 6.44772 17.5 7Z"
                    fill="currentColor"
                />
            </svg>
        </ng-template>
    `,
})
export class IconRouterComponent {
    @Input() fill: boolean = false;
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
