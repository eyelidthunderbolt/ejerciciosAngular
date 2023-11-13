import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio21-hijo',
  templateUrl: './ejercicio21-hijo.component.html',
  styleUrls: ['./ejercicio21-hijo.component.css']
})
export class Ejercicio21HijoComponent implements OnInit {

  @Input() visibleHijo: boolean = false;

  public numeroHijo: number = 0;
  @Input() numeroRecibido: number = 0;
  @Output() enviarNumero: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  recogerEnviarAlPadre(): void {


    this.enviarNumero.emit(this.numeroRecibido);


  }

}
