import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona'

@Component({
  selector: 'app-ejercicio3-repaso',
  template:`
  <div *ngFor="let item of myObject | keyvalue">
    Key: {{item.key}}, Value: {{item.value}}
  </div>
`,
  templateUrl: './ejercicio3-repaso.component.html',
  styleUrls: ['./ejercicio3-repaso.component.css']
})
export class Ejercicio3RepasoComponent implements OnInit {

  public persona: Persona
  public valoresPersona : string;

  constructor() {

    this.persona = new Persona( 'Paco',25,'Salamanca' )
  }

  ngOnInit(): void {
  }

}
