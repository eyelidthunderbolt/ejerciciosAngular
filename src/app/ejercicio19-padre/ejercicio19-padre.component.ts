import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio19-padre',
  templateUrl: './ejercicio19-padre.component.html',
  styleUrls: ['./ejercicio19-padre.component.css']
})
export class Ejercicio19PadreComponent implements OnInit {

  public productos : Array<string>;
  public stock : Array<number>;
  public precios : Array<number>;
  public totalPrecio : number;
  public totalProductos : number;
  public totalProductosRecibidosDesdeHijo : number = 0

  constructor() {

    this.productos = ["CocaCola", "Fanta", "Mountain Dew"];
    this.stock = [10, 15,26];
    this.precios = [2.99, 2.50,3.50];
    this.totalPrecio = 0 ;
    this.totalProductos = 0;
  }

  ngOnInit(): void {
  }

  anhadirProductos(i : number) {

    if (this.stock[i]>0){

      this.stock[i]--;
      this.totalProductos++;
      this.totalPrecio += this.precios[i];

    }
  }

  recibirTotalDelHijo(cadena : any){

    this.totalProductosRecibidosDesdeHijo = cadena

  }





}
