const buttom = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

buttom.addEventListener("click", mostrar);
