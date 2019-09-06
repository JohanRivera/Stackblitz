import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //Declaración de atributos
  nombre : string
  apellido: string
  edad: number
  estCivil: string

  //Definición de constructor
  constructor(){
    this.nombre = "Johan"
    this.apellido="Rivera"
    this.edad=12
    this.estCivil="Soltero"
  }

}
