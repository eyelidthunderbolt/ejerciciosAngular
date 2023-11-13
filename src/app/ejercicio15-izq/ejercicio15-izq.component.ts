import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio15-izq',
  templateUrl: './ejercicio15-izq.component.html',
  styleUrls: ['./ejercicio15-izq.component.css']
})
export class Ejercicio15IzqComponent {


  public cadena: Array<string>; // array donde se van a almacenar las palabras
  public numeros : Array<number>; // array donde se van a almacenar los numeros
  @Output() enviaNumeros: EventEmitter<number[]> = new EventEmitter // variable EventEmitter que va a enviar el array de numeros al componente derecho



  constructor(){


    this.cadena = [];
    this.numeros = [];


  }

  rellenarArray(valor : any){

    if(isNaN(valor)){ // Si la variable "valor" NO es un numero lo metemos en el array "cadena"

      this.cadena.push(valor);
    }

    else if(isNaN(valor)== false){ //Si la variable valor ES  un numero lo metemos en el array numeros y usamos emit para enviar el array de numeros al componente Der
      this.numeros.push(valor);
      this.enviaNumeros.emit(this.numeros);


    }
  }




}
