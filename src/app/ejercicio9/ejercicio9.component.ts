import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio9',
  templateUrl: './ejercicio9.component.html',
  styleUrls: ['./ejercicio9.component.css']
})
export class Ejercicio9Component implements OnInit {

  public variable1 : any;
  public mensaje : string;

  constructor() {

    this.variable1 = 2;
    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  igualarVariable(variableVista : any){



    if(this.variable1 == variableVista){

      this.mensaje = "ES IGUAL";

    }

    else{
      this.mensaje = "NO ES IGUAL";
    }

  }



}
