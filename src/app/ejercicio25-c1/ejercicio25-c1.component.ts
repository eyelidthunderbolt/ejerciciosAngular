import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio25-c1',
  templateUrl: './ejercicio25-c1.component.html',
  styleUrls: ['./ejercicio25-c1.component.css']
})
export class Ejercicio25C1Component implements OnInit {

  public arrayC1 : any[] = [17, 23, 12, 4, 5, 8, 13];
  public arrayTemporal : any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  compararArrays(arrayC2 : any[]){

    for (let i = 0; i < this.arrayC1.length; i++) {

      for (let j = 0; j < arrayC2.length; j++) {

        if (this.arrayC1[i] == arrayC2[j]) {
          this.arrayTemporal.push(arrayC2[j]);
        }

      }

    }






  }

}
