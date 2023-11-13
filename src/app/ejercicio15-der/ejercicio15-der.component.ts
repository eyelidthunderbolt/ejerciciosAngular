import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio15-der',
  templateUrl: './ejercicio15-der.component.html',
  styleUrls: ['./ejercicio15-der.component.css']
})
export class Ejercicio15DerComponent {

  public numeros :  Array<number>;



  constructor() {

    this.numeros = [];



  }

  recibirArray(arrayNumeros : Array<number>){

    this.numeros = arrayNumeros; //igualamos el array de numeros de componente derecho al array de numero pasado como parametro
  }



}
