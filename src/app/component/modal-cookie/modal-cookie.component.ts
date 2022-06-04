import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cookie',
  templateUrl: './modal-cookie.component.html',
  styleUrls: ['./modal-cookie.component.css']
})
export class ModalCookieComponent implements OnInit {

  constructor(public cookiealert: MatDialog) { }
 
  ngOnInit(): void {
  }


  openCookieBar() {
    this.cookiealert.open(ModalCookieComponent);
  }

}
