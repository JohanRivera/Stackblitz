export class Pelicula {
  nombre : string
	descripcion : string
	url : string

  constructor(nom : string, desc : string, url : string) {
    this.nombre=nom
		this.descripcion=desc
		this.url =url
  }
}