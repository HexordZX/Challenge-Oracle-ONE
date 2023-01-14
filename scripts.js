const d = document;

function Encriptar() {
  const capturar = d.getElementById("capturador").value;
  let desencriptado = "";
  let vocales = ["a", "e", "i", "o", "u"],
    codificados = ["ai", "enter", "imes", "ober", "ufat"];
  console.log(capturar);
  if (capturar === "") {
    alert("Por favor, ingrese un texto para ser encriptado.");
  }
}

function Desencriptar() {
  const capturar = d.getElementById("capturador").value;
  if (capturar === "") {
    alert("Por favor, ingrese un texto para ser desencriptado.");
  }
}
