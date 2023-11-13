import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio25-c2',
  templateUrl: './ejercicio25-c2.component.html',
  styleUrls: ['./ejercicio25-c2.component.css']
})
export class Ejercicio25C2Component implements OnInit {

  public arrayC2 : any[] = [4,8,15];
  public arrayTemporalC2 : any[] = []
  @Input() arrayRecibidoEnC2: any;
  @Output() arrayQueSeEnviaDesdeC2 = new EventEmitter<any[]>;

  constructor() { }

  ngOnInit(): void {
  }

  mandarArray2(){
    this.arrayQueSeEnviaDesdeC2.emit(this.arrayC2)
  }



}
