var contador = 0;

function validarCliente(nombre, apellido, cedula) {
  if (nombre === "" || typeof nombre === "undefined") {
    alert("Debes ingresar bien el campo nombre!")
    return false
  }
  if (apellido === "" || typeof apellido === "undefined") {
    alert("Debes ingresar bien el campo apellido!")
    return false
  }
  if (cedula === "" || typeof cedula === "undefined") {
    alert("Debes ingresar bien el campo cedula!")
    return false
  }
  return true
}

function botonEliminar(cedula) {
  let botonEliminar = document.createElement("button")
  botonEliminar.textContent = "X"
  botonEliminar.addEventListener("click", () => {
    console.log("cedula ", cedula)
    let fila = document.getElementById("fila" + cedula)
    fila.parentNode.removeChild(fila)
  })
  return botonEliminar
}

function crearFila(nombre, apellido, cedula) {
  console.log(nombre, apellido, cedula)
  let tr = document.createElement("tr")
  tr.id = "fila" + cedula
 
  let celdaNombre = document.createElement("td")
  celdaNombre.appendChild(document.createTextNode(nombre))
 
  let celdaApellido = document.createElement("td")
  celdaApellido.appendChild(document.createTextNode(apellido))
 
  let celdaCedula = document.createElement("td")
  celdaCedula.appendChild(document.createTextNode(cedula))

  let celdaEliminar = document.createElement("td")
  celdaEliminar.appendChild(botonEliminar(cedula))
 
  tr.appendChild(document.createTextNode(contador))
  tr.appendChild(celdaNombre)
  tr.appendChild(celdaApellido)
  tr.appendChild(celdaCedula)
  tr.appendChild(celdaEliminar)
  contador++
  return tr
}

function addCliente(nombre, apellido, cedula) {
  let checkCliente = validarCliente(nombre, apellido, cedula);
  if (!checkCliente) {
    return
  }
  let contenido = document.getElementById("contenido-clientes")
  contenido.appendChild(crearFila(nombre, apellido, cedula))
}

let cliente = document.getElementById('agregarCliente')
cliente.addEventListener("click", () => {
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById('apellido')
  let cedula = document.getElementById("cedula")
  addCliente(nombre.value, apellido.value, cedula.value)
});