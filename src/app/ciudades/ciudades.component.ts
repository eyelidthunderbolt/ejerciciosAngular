import { Component } from '@angular/core';

@Component({
  selector: 'ciudades',
  templateUrl:'./ciudades.component.html',


})


export class CiudadesComponent {

  public nombre_componente = 'Componente de ciudades'
  public listado_ciudades = 'Salamanca, Zamora, Madrid y Barcelona'

  //let nombreVariable: tipoDato = valor;



  public nombre:String;
  public edad:number;
  public mayordeEdad:boolean;
  public trabajos: Array<String>


  constructor() {

    this.nombre = 'David';
    this.edad = 66;
    this.mayordeEdad = true;
    this.trabajos = ['Carpintero','Albañil', 'Fontanero'];
    this.holaMundo();



  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.holaMundo();
    this.cambiarEdad(45);
    alert(this.nombre+ " " + this.edad);
  }

  cambiarEdad(edad:number){
    this.edad=edad;
  }

  holaMundo(){
    alert('Bienvenido');
  }

}


