import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio16izq',
  templateUrl: './ejercicio16izq.component.html',
  styleUrls: ['./ejercicio16izq.component.css']
})
export class Ejercicio16izqComponent {

  public arrayIzquierdo : Array<any>;
  public mensaje : string;
  @Output() encontrados = new EventEmitter<Array<any>>(); // variable Emisora de tipo array
  @Output() noEncontrados = new EventEmitter<Array<any>>(); // variable Emisora de tipo array
  public arrayEncontrados : Array<any> = [];
  public arrayNoEncontrados : Array<any> = [];


  constructor(){

    this.arrayIzquierdo = ["Perro", "Gato", "Caballo",1,2,3];
    this.mensaje = "";

  }

  buscarOcurrencias(valor: any) {
    this.mensaje = "";
    let encontrado = false;  // Bandera para rastrear si se ha encontrado una ocurrencia

    for (let index = 0; index < this.arrayIzquierdo.length; index++) {
      
        if (this.arrayIzquierdo[index] == valor) {
            this.mensaje = "El valor " + valor + " se encuentra en el array izquierdo en la posición " + index;
            this.arrayEncontrados.push(this.arrayIzquierdo[index]);
            this.encontrados.emit(this.arrayEncontrados);
            encontrado = true;  // Se encontró una ocurrencia
            break;  // Sal del bucle después de encontrar una ocurrencia
        }
    }

    if (!encontrado) {
        this.mensaje = "El valor " + valor + " no se encuentra en el array izquierdo";
        this.arrayNoEncontrados.push(valor);
        this.noEncontrados.emit(this.arrayNoEncontrados);
    }
}





}

