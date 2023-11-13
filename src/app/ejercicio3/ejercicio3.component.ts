import { Component } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {

  public individuo : Persona;
  public mensaje : string;

  constructor() {
    this.individuo = new Persona('Paco', 35, 'Salamanca');
    this.mensaje = '';
  }

  compararPropiedades(){

    if (this.individuo.nombre == this.individuo.localidad) {

      this.mensaje = "Son iguales"

      
  }
  else {
    this.mensaje = "No son iguales"
  }

}
}
