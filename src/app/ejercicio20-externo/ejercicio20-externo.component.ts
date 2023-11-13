import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio20-externo',
  templateUrl: './ejercicio20-externo.component.html',
  styleUrls: ['./ejercicio20-externo.component.css']
})
export class Ejercicio20ExternoComponent implements OnInit {

  public colorFondo: string = "green";
  public visible: boolean = true;
  public colorNuevo: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor(){

    this.colorFondo = this.colorNuevo.toLowerCase();
    this.visible = false;
  }

  recibirColor(color:string){

    this.colorFondo = color;
    this.visible = true;
  }



}
