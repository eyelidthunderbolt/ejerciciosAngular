import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css']
})
export class Ejercicio11Component {

  public array : Array<number>;
  public mensaje : string;

  constructor() {

    this.array = [1,2,3,4,5,6,7,8,9,10];
    this.mensaje = "";
    
  }

  mostrarParImpar(mensajeVista : string){
    this.mensaje = "";

    for (let index = 0; index < this.array.length; index++) {
      
      if(mensajeVista === "Par" && this.array[index] % 2 == 0){
      
        this.mensaje = this.mensaje + this.array[index] + " es un numero par\n";
      
    }

    else if (mensajeVista === "Impar" && this.array[index] % 2 != 0) {

      this.mensaje = this.mensaje + this.array[index] + " es un numero impar\n";
  }

}
}
}
