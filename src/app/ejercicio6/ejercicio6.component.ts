import { Component } from '@angular/core';
import { Persona } from '../models/persona';
import { Empleado } from '../models/empleado';
@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component {

  public persona : Persona;
  public empleado : Empleado;
  public igual : boolean;
  public mensaje : string;

  constructor(){

    this.persona= new Persona("Juan",18,"Ciudad Rodrigo");
    this.empleado = new Empleado ("Luis", 35,"Encargado", true, true)
    this.igual= false;
    this.mensaje = "";
  }

  compararAtributos(){
    if (JSON.stringify(this.persona.edad) === JSON.stringify(this.empleado.cargo)) {
      // 👇️ this runs
      this.mensaje = "Son iguales"
    } else {
      this.mensaje = "No Son iguales"
    }

  }
}
