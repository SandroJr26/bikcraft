const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */ //Tipo de comentario para ajudar a desenvolver o site
function ativarAoClick(event) {
  console.log(event.x);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);
