function encriptar() {
  const textoOriginal = document.getElementById('input').value;
  let textoEncriptado = '';

  for (let i = 0; i < textoOriginal.length; i++) {
    const codigo = textoOriginal.charCodeAt(i);
    textoEncriptado += String.fromCharCode(codigo + 1);
  }

  document.getElementById('output').value = textoEncriptado;
}

function desencriptar() {
  const textoEncriptado = document.getElementById('output').value;
  let textoOriginal = '';

  for (let i = 0; i < textoEncriptado.length; i++) {
    const codigo = textoEncriptado.charCodeAt(i);
    textoOriginal += String.fromCharCode(codigo - 1);
  }

  document.getElementById('output').value = textoOriginal;
}
