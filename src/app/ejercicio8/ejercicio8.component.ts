import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component implements OnInit {

  public array : Array<number>
  public numero : number
  public mensaje : string;

  constructor() {

    this.array = [1,2,3,4,5,6,7,8,9];
    this.numero = 0;
    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  compararNumeros(){

    this.mensaje = "";
    for (let index = 0; index < this.array.length; index++) {

      if ( this.array[index] != this.numero ) {

        this.mensaje = this.mensaje + "\n" + this.numero + " y " + this.array[index] + "No son iguales \n"

    }

      else {
      this.mensaje =this.mensaje + "\n"+ this.numero + " y " + this.array[index] + "Son iguales \n"
    }


  }

  }
}
