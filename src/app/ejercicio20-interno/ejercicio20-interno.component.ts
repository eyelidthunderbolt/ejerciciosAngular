import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio20-interno',
  templateUrl: './ejercicio20-interno.component.html',
  styleUrls: ['./ejercicio20-interno.component.css']
})
export class Ejercicio20InternoComponent implements OnInit {

   @Input() colorRecibido : string = "";
   @Input() visibilidad : boolean = false;
   @Output() colorEnviado = new EventEmitter<string>();
   public colorHijo : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarColorHijo(){


    this.colorHijo = this.colorRecibido;
    this.visibilidad = false;
    this.colorEnviado.emit(this.colorHijo);




  }

}
