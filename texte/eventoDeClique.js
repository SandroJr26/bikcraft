const larguraTela = window.innerWidth;

function cordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

// window.addEventListener("mousemove", cordenadaMouse);

function scroll() {
  console.log("Usou o scroll");
}

// window.addEventListener("scroll", scroll);

function scroll() {
  console.log(window.scrollY);
}

window.addEventListener("scroll", scroll);
