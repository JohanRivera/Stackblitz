import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

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