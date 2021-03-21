import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase:any;
  mostrar: boolean;
  personajes: string [];

  constructor() { 
    this.frase=  {
      mensaje: ' Un gran poder requiere una gran responsabilida',
      autor: 'Ben parker'
    };
    this.mostrar = true;
    this.personajes = ['Spiderman', 'Venu', 'El pidio valdes'];
  }

  ngOnInit(): void {
  }

}
