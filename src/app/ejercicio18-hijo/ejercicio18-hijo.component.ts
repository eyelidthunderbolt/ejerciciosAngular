import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio18-hijo',
  templateUrl: './ejercicio18-hijo.component.html',
  styleUrls: ['./ejercicio18-hijo.component.css']
})
export class Ejercicio18HijoComponent implements OnInit {

  @Output() envio = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }

  realizarComunicacion(dato : string){

    this.envio.emit(dato);



}
}
