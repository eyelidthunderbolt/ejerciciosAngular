import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio24-padre',
  templateUrl: './ejercicio24-padre.component.html',
  styleUrls: ['./ejercicio24-padre.component.css']
})
export class Ejercicio24PadreComponent implements OnInit {

  colorRecogidoPadre : String;
  colorEnviado : String;
  visibilidad : boolean;

  constructor() {
    this.colorRecogidoPadre = "";
    this.colorEnviado = "";
    this.visibilidad = false;
   }

  ngOnInit(): void {
  }

  recogerColorPadre(colorRecogidoP : String){

    this.colorEnviado = colorRecogidoP;

  }
  cambiarVisibilidad (){

    this.visibilidad = true;

  }

}
