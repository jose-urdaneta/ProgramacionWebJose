function saludar() {
  var elemento = document.querySelector("p");
  //console.log(elemento.innerText);
  elemento.innerText = "Adios Mundo";
}

function obtenerDato() {
  var elemento = document.querySelector("#usuario");
  console.log(elemento.value);
}

function contar() {
  var elemento = document.querySelector("#numero");
  var calculo = parseInt(elemento.innerText) + 1;
  elemento.innerText = calculo;
}

function agrega() {
  var elemento = document.querySelector("#extra");
  var concatena = elemento.value;
  elemento.value = concatena;
}

function cambiarColor() {
  var elemento = document.querySelector("#textoColor");
  elemento.style.color = "red";
  elemento.style.fontSize = "30px";
  elemento.style.fontWeight = "bold";

  alert("Cambio diseno");
}

function cambiarColores() {
  var elemento = document.querySelector("#colores");
  elemento.style.color = "red";
  elemento.style.border = "solid blue";
  elemento.style.backgroundColor = "Green";
}
