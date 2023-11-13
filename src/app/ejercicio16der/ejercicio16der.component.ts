import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio16der',
  templateUrl: './ejercicio16der.component.html',
  styleUrls: ['./ejercicio16der.component.css']
})
export class Ejercicio16derComponent {

  public arrayEncontrados : Array<any> = [];
  public arrayNoEncontrados : Array<any> = [];

  constructor(){

    this.arrayEncontrados = [];
    this.arrayNoEncontrados = [];

  }

  anhadirEncontrados(arrayEncontrados : Array<any>){

    this.arrayEncontrados = arrayEncontrados;
  
  }

  anhadirNoEncontrados(arrayNoEncontrados : Array<any>){

    this.arrayNoEncontrados = arrayNoEncontrados;
  
  }

  



}
