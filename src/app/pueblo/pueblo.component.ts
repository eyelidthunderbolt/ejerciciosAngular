import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
  styleUrls: ['./pueblo.component.css']
})
export class PuebloComponent {

  @Input() ciudadQueRecojo : string;

  constructor() { 
    this.ciudadQueRecojo = '';

  }

}
