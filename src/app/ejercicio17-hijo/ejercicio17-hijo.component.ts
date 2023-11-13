import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio17-hijo',
  templateUrl: './ejercicio17-hijo.component.html',
  styleUrls: ['./ejercicio17-hijo.component.css']
})
export class Ejercicio17HijoComponent implements OnInit {

  public mensajeDelPadre: string

  constructor() {

    this.mensajeDelPadre = '';
  }

  ngOnInit(): void {
  }

  recibirMensaje(dato : string){

    this.mensajeDelPadre = dato;


  }



}
