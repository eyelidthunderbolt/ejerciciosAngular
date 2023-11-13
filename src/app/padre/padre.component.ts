import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  public mensajePadre : string;

  constructor() {
    this.mensajePadre = '';
  }

  procesaPropagar(mensaje : any){
    this.mensajePadre = mensaje;
  
  }

}
