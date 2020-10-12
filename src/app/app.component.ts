import { Component } from '@angular/core';
import { StepsData, StatusConfig } from './component/timeline/timeline-flow.options';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ],
})
export class AppComponent {
  title = 'portfolio';



}
