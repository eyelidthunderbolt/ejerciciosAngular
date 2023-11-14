import { Component, OnInit } from '@angular/core'
import { Persona } from '../models/persona'

@Component({
  selector: 'app-ejercicio5-repaso',
  templateUrl: './ejercicio5-repaso.component.html',
  styleUrls: ['./ejercicio5-repaso.component.css']
})
export class Ejercicio5RepasoComponent implements OnInit {

  public persona : Persona;

  constructor() {

    this.persona = new Persona("Fernando", 38, "Ponferrada")
  }

  ngOnInit(): void {
  }

}
