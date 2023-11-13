import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio27-padre',
  templateUrl: './ejercicio27-padre.component.html',
  styleUrls: ['./ejercicio27-padre.component.css']
})
export class Ejercicio27PadreComponent implements OnInit {

  public arrayPadre : Array<number>;
  public mensaje : string;
  public numeroRepetido : number;
  public ocurrencias : number;

  constructor() {

    this.arrayPadre = [1,2,3,4,5,6,7,8,9,10]
    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  recogerMensaje(mensajeRecogido : string){

    this.mensaje =mensajeRecogido;



  }


}
