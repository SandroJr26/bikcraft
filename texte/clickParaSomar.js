const botaoClick = document.querySelector(".botao");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;

  if (total < 11) {
    div.innerText = total;
  } else {
    console.log("Não retorna nada");
  }
  console.log(total);
}

if (botaoClick) {
  botaoClick.addEventListener("click", somar);
}
