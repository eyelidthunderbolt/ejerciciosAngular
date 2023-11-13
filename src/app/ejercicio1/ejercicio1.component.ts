import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  public mensaje: string;
  public mensajeRecogido: string;


constructor(){

  this.mensaje = '';
  this.mensajeRecogido = '';
  
}

recogerMensaje(mensajeRecogido:any) { 

  this.mensaje =mensajeRecogido;


}
}


