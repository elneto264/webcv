import { Component, OnInit, Input } from '@angular/core';
import { faTwitter, faFacebook, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  masinfo = false;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faDribbble = faDribbble;
  faGithub = faGithub;

  mostrarInfo() {
    if ( this.masinfo === false){
      this.masinfo = true;
    } else {
      this.masinfo = false;
    }
  }
  ngOnInit(): void {
  }

}
