import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio18-padre',
  templateUrl: './ejercicio18-padre.component.html',
  styleUrls: ['./ejercicio18-padre.component.css']
})
export class Ejercicio18PadreComponent implements OnInit {

  public mensajeRecibido : string = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  mostrarMensaje(dato : string): void {

    this.mensajeRecibido = dato;

}
}
