const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */
function ativarAoClick(event) {
  console.log(event.x);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);
