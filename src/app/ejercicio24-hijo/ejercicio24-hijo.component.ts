import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio24-hijo',
  templateUrl: './ejercicio24-hijo.component.html',
  styleUrls: ['./ejercicio24-hijo.component.css']
})
export class Ejercicio24HijoComponent implements OnInit {

  @Input() colorRecogido : String;
  colorRecogidoHijo : String;
  @Input() visibilidadRecogida : boolean;
  nuevoColorHijo : String;

  constructor() {
    this.colorRecogido = "";
    this.colorRecogidoHijo = "";
    this.visibilidadRecogida = false;
    this.nuevoColorHijo = ""


  }

  ngOnInit(): void {
  }

  cambiarColorHijo(colorRecogidoHijo : String){
    if (colorRecogidoHijo ==this.colorRecogido){
      alert("Ese color ya ha salido elija otro")
    }
    else
    this.colorRecogido = colorRecogidoHijo;

  }

  comprobarColor(){

  }

}
