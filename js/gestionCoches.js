const coches = []

function Coche (marca, color, fechaMatricula) {
  this.marca = marca
  this.color = color
  this.fechaMatricula = Date.parse(fechaMatricula)

  this.mostrarFechaMatricula = () => {
    return new Date(this.fechaMatricula).toLocaleDateString('es')
  }
}

function listarCoches () {
  return coches
}

function anyadirCoche (coche) {
  coches.push(coche)
}

export {
  Coche,
  listarCoches, anyadirCoche
}
