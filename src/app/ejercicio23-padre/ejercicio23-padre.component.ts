import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-ejercicio23-padre',
  templateUrl: './ejercicio23-padre.component.html',
  styleUrls: ['./ejercicio23-padre.component.css']
})
export class Ejercicio23PadreComponent implements OnInit {

  public alumno:Alumno | undefined;
  public mayorEdad : string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  instanciarAlumno(){

    this.alumno = new Alumno('Paco', 17);

  }

  recibirEdad(mensaje : string){

    this.mayorEdad = mensaje;

  }

}
