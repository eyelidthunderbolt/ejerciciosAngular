import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio21-padre',
  templateUrl: './ejercicio21-padre.component.html',
  styleUrls: ['./ejercicio21-padre.component.css']
})
export class Ejercicio21PadreComponent implements OnInit {

  public numeroDelPadre: number = 0;
  public visible: boolean = true;
  public inputVisible : boolean = true;
  //@Output() enviarNumeroDelPadre = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  recogerNumeroDelPadre(numero : number) {

    this.numeroDelPadre = numero;
    this.visible = false;

    //this.enviarNumeroDelPadre.emit(this.numeroDelPadre)


  }

  recibirNumero(numero:any){

    this.numeroDelPadre = numero
    this.visible = true;
  }

}
