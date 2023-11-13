import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  mensajeDelPadre : any;
  @Output() propagar = new EventEmitter<string>();

  onPropagar(){
    this.propagar.emit(this.mensajeDelPadre);
  }

}
