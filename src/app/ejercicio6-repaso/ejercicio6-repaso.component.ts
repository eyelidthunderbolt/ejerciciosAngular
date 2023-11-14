import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import {Alumno } from '../models/alumno';

@Component({
  selector: 'app-ejercicio6-repaso',
  templateUrl: './ejercicio6-repaso.component.html',
  styleUrls: ['./ejercicio6-repaso.component.css']
})
export class Ejercicio6RepasoComponent implements OnInit {

  public persona : Persona;
  public alumno : Alumno;


  constructor() {

    this.persona = new Persona("Fernandez", 38, "Ponferrada")
    this.alumno = new Alumno("Caracrander", 21);

  }

  ngOnInit(): void {
  }

}
