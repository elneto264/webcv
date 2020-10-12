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
import { filter } from 'rxjs/operators';


declare let gtag: Function;




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


  statusData: StepsData[] = [{
    step: '????',
    subtext: 'To the infinity and beyond!',
    status: 'Not Started'
  }, {
    step: '2020 – 2020 | Intern. • LetMePark. • Madrid.',
    subtext: 'Intern de jornada completa, trabajando en la actual plataforma de parkings tanto en front como en back end.',
    status: 'Completed'
  }, {
    step: '2016 – 2019 | Coordinador. • Atmosphere Living. S.L. • Madrid.',
    subtext: '-Coordinación de un equipo de tres personas en los departamentos de marketing y mantenimiento.<br> -Contacto con plataformas de gestión de inmuebles, contacto con clientes, ubicación de los inmuebles en medios digitales, estrategias de colaboración de coworking, coordinación del equipo, diseño gráfico, optimización del estado de los inmuebles, gestión de emergencias, contacto con contratistas para mejoras o reparación.',
    status: 'Completed'
  }, {
    step: '2015 – 2016 | Diseñador Gráfico • Embabia S.L. • Madrid. ',
    subtext: 'Creación de artes para los diferentes bares y restaurantes que posee la empresa.',
    status: 'Completed'
  }, {
    step: '2014-2014 | Intern • Infocarto • Madrid.',
    status: 'Completed'
  }, {
    step: '¡HOLA MADRID!',
    status: 'Completed'
  }];
  StatusValues: StatusConfig[] = [{
    text: 'Not Started',
    styles: { pipeColor: '', textColor: '#A5A5A5', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'In progress',
    styles: { pipeColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Completed',
    styles: { pipeColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }];
  CustomStatusValues: StatusConfig[] = [{
    text: 'Pending',
    styles: { pipeColor: '#F00', textColor: '#F00', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'Working on It',
    styles: { pipeColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Done',
    styles: { pipeColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }];
  CustomStatusData: StepsData[] = [{
    step: 'This is Step 1',
    status: 'Done'
  }, {
    step: 'This is Step 2',
    subtext: 'This is a dummy text for sub title for this step. This should be show below the title',
    status: 'Done'
  }, {
    step: 'Step 3',
    status: 'Done'
  }, {
    step: 'Step 4',
    status: 'Working on It'
  }, {
    step: 'Step 5',
    status: 'Pending'
  }, {
    step: 'Step 6',
    status: 'Pending'
  }];

  constructor( public router: Router){
    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'G-KTMN8HVTRM', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );

  }
}
)}

}
