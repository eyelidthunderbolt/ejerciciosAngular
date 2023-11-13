import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio19-hijo',
  templateUrl: './ejercicio19-hijo.component.html',
  styleUrls: ['./ejercicio19-hijo.component.css']
})
export class Ejercicio19HijoComponent implements OnInit {

  public totalProductosHijo: number = 0;
  public totalPrecioHijo: number = 0;
  @Input() totalProductosDesdePadre: number = 0;
  @Input() totalPrecioDesdePadre: number = 0;
  @Output() envioTotalProductos = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  mandarTotalProductosAlPadre(){

    this.envioTotalProductos.emit(this.totalProductosDesdePadre);
  }

}
