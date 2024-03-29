import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonaComponent } from '../persona/persona.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { PacienteComponent } from '../paciente/paciente.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PersonaComponent, PeliculaComponent, PacienteComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
