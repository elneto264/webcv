import { Component, OnInit } from '@angular/core';
declare function reiniciar();
declare function numeroAleatorio();

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  nrandom() {
    numeroAleatorio();
  }

  reinicio() {
    reiniciar();
  }

}
