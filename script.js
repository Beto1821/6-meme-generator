const textoinput = document.getElementById('text-input');
const mtext = document.getElementById('meme-text');
const mImage = document.getElementById('meme-image');
const mInsert = document.getElementById('meme-insert');


function inserirTexto() {
  mtext.innerText = textoinput.value;
}

textoinput.addEventListener('input', inserirTexto);

function loadfile(event) {
  mImage.src = URL.createObjectURL(event.target.files[0]);
}

mInsert.addEventListener('click', loadfile);