import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en','de','es']);
    translate.setDefaultLang('en');


    const chlang = translate.getBrowserLang();
    translate.use(chlang.match(/en|de|es/) ? chlang: 'en' );
  }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
}
