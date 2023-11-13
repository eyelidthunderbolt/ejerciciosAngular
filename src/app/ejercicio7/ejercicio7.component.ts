import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {

  public array : Array<string>;
  public texto : string;
  public numero : number;

  constructor() {

    this.array = ["Contenido1", "Contenido2", "Contenido3"];
    this.texto = "";
    this.numero = 0;

   }

  ngOnInit(): void {
  }

  mostrarArray(){
    this.texto = "";
    for (let index = 0; index < this.numero; index++) {

      this.texto+= this.array.join(" ") + " ";
    }


  }
}
