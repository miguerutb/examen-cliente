import * as gc from './gestionCoches.js'

function repintar () {
  const dCoches = document.getElementById('coches')
  dCoches.innerHTML = ''

  for (const coche of gc.listarCoches()) {
    const dCoche = document.createElement('div')
    dCoche.className = 'coche'
    dCoches.append(dCoche)

    crearElemento('dt', 'Marca', dCoche)
    crearElemento('dd', coche.marca, dCoche)
    crearElemento('dt', 'Color', dCoche)
    crearElemento('dd', coche.color, dCoche)
    crearElemento('dt', 'Fecha de matriculacion', dCoche)
    crearElemento('dd', coche.fechaMatricula, dCoche)
  }
}

function crearElemento (el, dato, padre) {
  const elemento = document.createElement(el)
  elemento.innerHTML = dato
  padre.append(elemento)
}

function anyadirCocheWeb (e) {
  e.preventDefault()
  const form = e.target

  const marca = form.elements.marca.value
  const color = form.elements.color.value
  const fecha = new Date(form.elements.fechamatricula.value)

  const cocheNuevo = new gc.Coche(marca, color, fecha)
  gc.anyadirCoche(cocheNuevo)

  repintar()
}

export {
  repintar, anyadirCocheWeb
}
