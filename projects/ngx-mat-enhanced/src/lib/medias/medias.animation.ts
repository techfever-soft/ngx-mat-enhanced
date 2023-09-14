import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const scaleAnimation = [
  trigger('scaleAnimation', [
    transition(':enter', [
      animate(
        '0.15s',
        keyframes([
          style({ transform: 'scale(0.5)', offset: 0 }),
          style({ transform: 'scale(1)', offset: 1.0 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        '0.15s',
        keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0.5)', offset: 1.0 }),
        ])
      ),
    ]),
  ]),
];
