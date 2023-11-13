import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent {

  public ciudadqueenvio : string;


  constructor() {
  
    this.ciudadqueenvio = "Milan";

  }
}


