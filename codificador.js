let texto;
let nuevoTexto;
let btnCodificar = document.getElementById("codificar");
let btnDecodificar = document.getElementById("decodificar");
let btnCopiar = document.getElementById("copiar");
let cuadro = document.getElementById("cuadro");
let icono = document.getElementById("icono");
let barra = document.getElementById("barra");
let letrero = document.getElementById("mensaje");
let screenWidth = screen.width;

let cont = 0;
let porsentaje = 0;
let proseso = "";
let prosses;
let run = false;

function limpiarBarra() {
  cont = 0;
  porsentaje = 0;
  proseso = "";
  barra.innerHTML = "";
}

function barraProseso(limpiar, callback) {
  cont += 1;
  porsentaje = Math.round((100 / 70) * cont);
  proseso = "█" + proseso;
  barra.innerHTML =
    "Prosesando.....<br>" + proseso + "     " + porsentaje + "%";
  if (screenWidth > 480) {
    if (cont == 70) {
      clearInterval(prosses);
      limpiar();
      callback();
    }
  } else {
    if (cont == 27) {
      clearInterval(prosses);
      limpiar();
      callback();
    }
  }
}

function codificar() {
  texto = document.getElementById("textInput").value;
  if (texto) {
    nuevoTexto = texto.toLowerCase();

    nuevoTexto = nuevoTexto.replace(new RegExp("e", "ig"), "enter");
    nuevoTexto = nuevoTexto.replace(new RegExp("i", "ig"), "imes");
    nuevoTexto = nuevoTexto.replace(new RegExp("a", "ig"), "ai");
    nuevoTexto = nuevoTexto.replace(new RegExp("o", "ig"), "ober");
    nuevoTexto = nuevoTexto.replace(new RegExp("u", "ig"), "ufat");

    mostrarResultado(nuevoTexto);
  } else {
    cuadro.innerHTML = "No hay texto para Codificar ";
    btnCopiar.hidden = true;
    icono.hidden = false;
  }
}

function decodificador() {
  texto = document.getElementById("textInput").value;
  if (texto) {
    nuevoTexto = texto.toLowerCase();
    nuevoTexto = nuevoTexto.replace(new RegExp("enter", "ig"), "e");
    nuevoTexto = nuevoTexto.replace(new RegExp("imes", "ig"), "i");
    nuevoTexto = nuevoTexto.replace(new RegExp("ai", "ig"), "a");
    nuevoTexto = nuevoTexto.replace(new RegExp("ober", "ig"), "o");
    nuevoTexto = nuevoTexto.replace(new RegExp("ufat", "ig"), "u");

    mostrarResultado(nuevoTexto);
  } else {
    cuadro.innerHTML = "No hay texto para Decodificar ";
    btnCopiar.hidden = true;
    icono.hidden = false;
  }
}

function mostrarResultado(texto) {
  cuadro.innerHTML = texto;
  icono.hidden = true;
  btnCopiar.hidden = false;
  document.getElementById("textInput").value = "";
  document.getElementById("textInput").focus;
}

function iniciarCodificacion() {
  prosses = setInterval(barraProseso, 50, limpiarBarra, codificar);
}

function iniciarDecodificacion() {
  prosses = setInterval(barraProseso, 50, limpiarBarra, decodificador);
}

function copiar() {
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById("cuadro").innerHTML);

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);

  document.getElementById("textInput").value = " ";
  document.getElementById("textInput").focus();
}

function cambiarLetrero() {
  letrero.innerHTML =
    "********************************** <br> * CODIFICADOR Y DECODIFICADOR DE TEXTO CODE * <br>**********************************";
}

if (screenWidth <= 480) {
  cambiarLetrero();
}

btnCodificar.onclick = iniciarCodificacion;
btnDecodificar.onclick = iniciarDecodificacion;
btnCopiar.onclick = copiar;
