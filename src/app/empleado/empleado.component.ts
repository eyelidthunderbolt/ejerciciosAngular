import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public titulo = 'Titulo del componente Empleado';
  //public trabajadores : Array<Empleado>;
  public valorSeleccionado : string;




  constructor() {

    /*this.trabajadores= [
      new Empleado('Paco Garcia', 35, 'Recepcionsita', true,true),
      new Empleado('Manolo Perez', 53, 'Mecanico', true,false),
      new Empleado('Lucia Echeverria', 42, 'Violinista', false,true)
    ];*/

    this.valorSeleccionado = "perro";





   }

   mostrarValor(){
    console.log(this.valorSeleccionado);
   }

  ngOnInit(): void {
  }

}
