import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio26-padre',
  templateUrl: './ejercicio26-padre.component.html',
  styleUrls: ['./ejercicio26-padre.component.css']
})
export class Ejercicio26PadreComponent implements OnInit {

  public arrayNumeros : Array<number>;
  public contadorImpares : number;

  constructor() {

    this.arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
   }

  ngOnInit(): void {
  }

  recogerImpares(cantidadImpares :  number){
    console.log(cantidadImpares)
    this.contadorImpares = cantidadImpares;
  }



}
