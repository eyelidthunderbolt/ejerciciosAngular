import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.component.html',
  styleUrls: ['./ejercicio10.component.css']
})
export class Ejercicio10Component implements OnInit {

  public array : Array<number>;

  public mensaje : string;

  constructor() {

    this.array = [1,2,3,4,5,6,7,8,9];
    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  invertirArray(){

    this.mensaje = "";

    let arrayTemporal = this.array.reverse();

    for (let index = 0; index < arrayTemporal.length; index++) {


      this.mensaje = this.mensaje + "Valor del array temporal en la posicion " + (index+1) + " : " + arrayTemporal[index] + "\n";

    }


  }

}
