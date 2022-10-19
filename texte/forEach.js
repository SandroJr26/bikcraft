const links = Array.from(document.querySelectorAll("nav a"));

console.log(links);

const ultimoLink = links.pop();

console.log(links);

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);

console.log(links[links.length - 1]);

const lista = ["JavaScript", "HTML", "CSS"];

const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(primeiro);
console.log(ultimo);

lista.push("JavaScript");
console.log(lista);
