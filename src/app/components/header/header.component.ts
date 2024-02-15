import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeBottom', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('2000ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeRight', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('2000ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('flyInOutLeft', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate('1000ms ease-in')
      ]),
    ]),
    trigger('flyInOutRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate('700ms ease-in')
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    
  ]
  
})
export class HeaderComponent {
  showPage1 = true; // Initialize showPage1 to true
showPage2 = false; // Initialize showPage2 to false
showPage3 = false; // Initialize showPage3 to false
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showPage1 = false;
      this.showPage2 = true; // Set showPage2 to true after 3000 milliseconds
    }, 3000);

    setTimeout(() => {
      this.showPage2 = false;
      this.showPage3 = true; // Set showPage3 to true after 6000 milliseconds
    }, 6000);
  }

}
