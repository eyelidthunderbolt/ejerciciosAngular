import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio13',
  templateUrl: './ejercicio13.component.html',
  styleUrls: ['./ejercicio13.component.css']
})
export class Ejercicio13Component {

  public colorFondo : string;
  public tamanoCuadrado : number;
  public mensaje : string;

  constructor() {

    this.colorFondo = "green";
    this.tamanoCuadrado = 100;
    this.mensaje = ""
    
  }

  cambiarColor(colorNuevo : string){
    
    

    if (this.colorFondo == colorNuevo) {

      this.mensaje = "El color no ha cambiado";

      
  }

  else{
    this.colorFondo = colorNuevo;
    this.mensaje = "El color ha cambiado";
  }

}
}
