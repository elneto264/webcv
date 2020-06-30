import { Component, OnInit } from '@angular/core';
declare function infogen();


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    infogen();
  }


}
