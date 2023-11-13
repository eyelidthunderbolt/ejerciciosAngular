import { Component,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio14-izq',
  templateUrl: './ejercicio14-izq.component.html',
  styleUrls: ['./ejercicio14-izq.component.css']
})
export class Ejercicio14IzqComponent {

  public palabras: string[];


  @Output() envia = new EventEmitter<string[]>(); // variable Emisora de tipo array

  constructor() {

    this.palabras = [];


  }

  rellenarYEnviar(palabra : string){

    this.palabras.push(palabra); // metemos la palabra nueva en el array
    this.envia.emit(this.palabras); //emitimos el array


  }

}
