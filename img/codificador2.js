let texto;
let nuevoTexto;
let btnCodificar = document.getElementById("codificar");
let btnDecodificar = document.getElementById("decodificar");
let btnCopiar = document.getElementById("copiar");
let cuadro = document.getElementById("cuadro");
let icono = document.getElementById("icono");
let barra = document.getElementById("barra");

let cont = 0;
let porsentaje = 0;
let proseso = "";
let prosses;
let run = false;

function limpiarBarra() {
  barra.innerHTML = "";
}

function barraProseso() {
  cont += 1;
  porsentaje = Math.round((100 / 70) * cont);
  proseso = "█" + proseso;
  barra.innerHTML =
    "Prosesando.....<br>" + proseso + "     " + porsentaje + "%";
  if (cont == 70) {
    cont = 0;
    clearInterval(prosses);
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

    cuadro.innerHTML = nuevoTexto;

    icono.hidden = true;
    btnCopiar.hidden = false;
    document.getElementById("textInput").value = "";
    document.getElementById("textInput").focus;
  } else {
    cuadro.innerHTML = "No hay texto para Codificar ";
    btnCopiar.hidden = true;
    icono.hidden = false;
  }
}

function decodificador() {
  let a = iniciarBarra();
  console.log(a);
  texto = document.getElementById("textInput").value;
  if (texto) {
    nuevoTexto = texto.toLowerCase();
    nuevoTexto = nuevoTexto.replace(new RegExp("enter", "ig"), "e");
    nuevoTexto = nuevoTexto.replace(new RegExp("imes", "ig"), "i");
    nuevoTexto = nuevoTexto.replace(new RegExp("ai", "ig"), "a");
    nuevoTexto = nuevoTexto.replace(new RegExp("ober", "ig"), "o");
    nuevoTexto = nuevoTexto.replace(new RegExp("ufat", "ig"), "u");

    cuadro.innerHTML = nuevoTexto;
    icono.hidden = true;
    btnCopiar.hidden = false;
    document.getElementById("textInput").value = "";
    document.getElementById("textInput").focus;
  } else {
    cuadro.innerHTML = "No hay texto para Decodificar ";
    btnCopiar.hidden = true;
    icono.hidden = false;
  }
}

function iniciarBarra() {
  limpiarBarra();
  prosses = setInterval(barraProseso, 10);
  return "hola";
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

btnCodificar.onclick = iniciarBarra;
btnDecodificar.onclick = decodificador;
btnCopiar.onclick = copiar;
