import { Component } from '@angular/core';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent{
  pelicula: Pelicula
  pelicula2: Pelicula

  constructor() { 
    this.pelicula = new Pelicula("Potter","Potter es voldermort","www.nanana")
    this.pelicula2 = new Pelicula("Voldemort","Potter es voldermort","www.nanana.com")
  }
}