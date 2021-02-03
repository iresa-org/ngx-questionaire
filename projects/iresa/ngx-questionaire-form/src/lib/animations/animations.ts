import { animate, style, transition, trigger } from "@angular/animations";


export const fadeIn = trigger('fadeIn', [ 
  transition('void => *', [
    style({ opacity: 0 }), 
    animate(1000, style({opacity: 1}))
  ]) 
]);
