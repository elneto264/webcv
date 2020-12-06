import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})


export class CabezeraComponent implements OnInit {

  title = 'portfolio';
  
  @Output() public sidenavToggle = new EventEmitter();

  constructor( public translate: TranslateService) {
    translate.addLangs(['en','de','es']);
    translate.setDefaultLang('en');


    const chlang = translate.getBrowserLang();
    translate.use(chlang.match(/en|de|es/) ? chlang: 'en' );
   }

  

  // constructor( private translate: TranslateService) {
  //   translate.addLangs(['en','de','es']);
  //   translate.setDefaultLang('en');
  //  }

  // useLanguage(language: string){
  //   this.translate.use(language);
  // }



  ngOnInit(): void {

  }

  public onToggleSidenav = () => { 

    this.sidenavToggle.emit();

  }




}
