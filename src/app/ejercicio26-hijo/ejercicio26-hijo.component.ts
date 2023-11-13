import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio26-hijo',
  templateUrl: './ejercicio26-hijo.component.html',
  styleUrls: ['./ejercicio26-hijo.component.css']
})
export class Ejercicio26HijoComponent implements OnInit {

  @Input() arrayRecogido : Array<number>;
  public arrayImpares : Array<number>;
  public contadorImpares : number = 0;
  @Output() numeroImpares = new EventEmitter<number>()

  constructor() {
    this.arrayImpares = [];
  }



  ngOnInit(): void {
  }

  mostrarImpares(){

    this.arrayImpares = [];

    for (let index = 0; index < this.arrayRecogido.length; index++) {

      if (this.arrayRecogido[index] % 2 != 0) {

        this.arrayImpares.push(this.arrayRecogido[index]);
        this.contadorImpares++;
      }




    }

    this.numeroImpares.emit(this.contadorImpares)
  }






}
