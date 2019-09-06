import { Component} from '@angular/core';
import { Paciente } from './paciente'

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent{
  paciente1 : Paciente[]
  
  constructor() { 
    this.paciente1 = [new Paciente("Johan","Rivera","1123213","O+","kaskas")]
    this.paciente1.push(new Paciente("Karen","Huertas","4234231","A+","kaskas"))
    this.paciente1.push(new Paciente("Pepito","Carmen","9012390","O-","kaskas"))
  }
}