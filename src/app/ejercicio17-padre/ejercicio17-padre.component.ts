import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio17-padre',
  templateUrl: './ejercicio17-padre.component.html',
  styleUrls: ['./ejercicio17-padre.component.css']
})
export class Ejercicio17PadreComponent implements OnInit {


  @Output() envio = new EventEmitter<string>();

  constructor() {


   }

  ngOnInit(): void {
  }

  realizarComunicacion(dato : string){

    this.envio.emit(dato);

  }




}
