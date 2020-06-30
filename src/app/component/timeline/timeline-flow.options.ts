export const DEFAULT_STATUS_VALUES: StatusConfig[] = [{
    text: 'Not Started',
    styles: { pipeColor: '', textColor: '#A5A5A5', iconClass: 'fa fa-circle-o', iconPath: '' }
  }, {
    text: 'In progress',
    styles: { pipeColor: '', textColor: '#0077C8', iconClass: 'fa fa-exclamation-circle', iconPath: '' }
  }, {
    text: 'Completed',
    styles: { pipeColor: '#0077C8', textColor: '#49AF57', iconClass: 'fa fa-check-circle', iconPath: '' }
  }];
   
  export interface StatusConfig {
    text: string;
    styles?: StatusConfigStyles;
  }
   
  interface StatusConfigStyles {
    pipeColor?: string;
    textColor?: string;
    iconClass?: string;
    iconPath?: string;
  }
   
  export interface StepsData {
    step: string;
    subtext?: string;
    status: string;
  }