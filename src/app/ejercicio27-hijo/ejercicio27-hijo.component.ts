import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio27-hijo',
  templateUrl: './ejercicio27-hijo.component.html',
  styleUrls: ['./ejercicio27-hijo.component.css']
})
export class Ejercicio27HijoComponent implements OnInit {

  public arrayHijo:Array<number>
  @Input() arrayRecogido:Array<number>
  public valorMasRepetido : number;
  public valorOcurrencias : number
  @Output() mensaje = new EventEmitter<string>();
  public mensajeHijo : string;

  constructor() {
    this.arrayHijo = [1,1,3,5,5,5]
    this.mensajeHijo = "";
  }

  ngOnInit(): void {
  }

  compararArrays(){
    let ocurrencias : Array<number> = [];

    for (let i = 0; i < this.arrayRecogido.length; i++) {
      const valorRecogido = this.arrayRecogido[i];



      for (let j = 0; j < this.arrayHijo.length; j++) {

        const valorHijo = this.arrayHijo[j];

        if (valorRecogido == valorHijo) {

          if (!ocurrencias[valorRecogido]) {

            ocurrencias[valorRecogido] =1;

          }

          else{
            ocurrencias[valorRecogido]++
          }

        }

      }

    }

    let maxOcurrencias = 0;
    let valorMasRepetido = null;

    for (const valor in ocurrencias) {

      if (ocurrencias[valor]>maxOcurrencias) {

        maxOcurrencias = ocurrencias[valor];
        valorMasRepetido = Number (valor);

    }
  }

  if(valorMasRepetido != null){
    this.valorMasRepetido = valorMasRepetido;
    this.valorOcurrencias = maxOcurrencias;
  }
  this.mensajeHijo = "El numero que mas se repite es " + this.valorMasRepetido + " y se repite " + this.valorOcurrencias+ " veces"
  this.mensaje.emit(this.mensajeHijo);
}
}
