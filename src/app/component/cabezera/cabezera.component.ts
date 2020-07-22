import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})


export class CabezeraComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 

    this.sidenavToggle.emit();

  }


}
