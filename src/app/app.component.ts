import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
export class AppComponent implements OnInit {
  title = 'portfolio';

constructor(private meta: Meta,private titleService: Title) {}
ngOnInit(): void {
    this.titleService.setTitle('Ernesto Silva Web Developer');
    this.meta.addTag({
      name: 'author',
      content: 'ernesto silva'
    });
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'desarrollador, maquetador, programador'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Madrid'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'front end, back end, full stack'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Ernesto, Silva, Languasco'
    });
    this.meta.updateTag({
        name: 'description',
        content: 'Full Stack developer based in Madrid' +
          ' Junior web developer'
      });
  }

}
