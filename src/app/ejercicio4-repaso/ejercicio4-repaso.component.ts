import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona'

@Component({
  selector: 'app-ejercicio4-repaso',
  template:`
  <div *ngFor="let item of myObject | keyvalue">
    Propiedad: {{item.key}}, Valor: {{item.value}}
  </div>
`,
  templateUrl: './ejercicio4-repaso.component.html',
  styleUrls: ['./ejercicio4-repaso.component.css']
})
export class Ejercicio4RepasoComponent implements OnInit {

  public persona : Persona;
  public mensaje : string;
  public sonIguales : boolean;

  constructor() {

    this.persona = new Persona('Paco',25,'Salamanca');
    this.mensaje = "";

   }

  ngOnInit(): void {
  }

  //Metodo para hacerlo mediante un <button>

  compararPropiedades(){

    if(JSON.stringify(this.persona.nombre) === JSON.stringify(this.persona.edad)){

      this.mensaje = "Son Iguales"
    }

    else{
      this.mensaje = "No son Iguales"
    }






  }

}
