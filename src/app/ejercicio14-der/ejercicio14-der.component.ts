import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio14-der',
  templateUrl: './ejercicio14-der.component.html',
  styleUrls: ['./ejercicio14-der.component.css']
})
export class Ejercicio14DerComponent {

  public arrayDerecho : string[]; // el array en el que almacenamos las palabras

  constructor() {
    this.arrayDerecho = [];
  }

  recibirArray(arrayPalabras : string[]){

    this.arrayDerecho = arrayPalabras;
  }

}
