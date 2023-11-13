import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.component.html',
  styleUrls: ['./ejercicio12.component.css']
})
export class Ejercicio12Component {

  public colorFondo : string;
  public tamanoCuadrado : number;

  constructor() {

    this.colorFondo = "green";
    this.tamanoCuadrado = 100;
    
  }

  cambiarColor(colorNuevo : string){

    this.colorFondo = colorNuevo;


  }

}
