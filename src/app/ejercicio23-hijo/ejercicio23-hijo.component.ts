import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-ejercicio23-hijo',
  templateUrl: './ejercicio23-hijo.component.html',
  styleUrls: ['./ejercicio23-hijo.component.css']
})
export class Ejercicio23HijoComponent implements OnInit {

  @Input() alumnoHijo : Alumno | undefined;
  @Output() mayorEdad = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  informarPadre(){

    if(this.alumnoHijo && this.alumnoHijo.edad) {

      if(this.alumnoHijo.edad >= 18){

        this.mayorEdad.emit('Es Mayor de Edad')
      }

      else{
        this.mayorEdad.emit('Es Menor de Edad');
      }
    }
  }

}
