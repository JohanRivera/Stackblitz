export class Paciente {
  nombre : string
  apellido: string 
	cedula : string
	rh : string
  foto: string

  constructor(nom : string, ape : string, cc : string, ereh : string, fot: string) {
    this.nombre=nom
		this.apellido=ape
		this.cedula=cc
    this.rh=ereh
    this.foto=fot
  }
}