const cursos = ["JavaScript", "HTML", "CSS"];
const corpo = document.querySelector("body");

for (var index = 0; index < cursos.length; index++) {
  console.log(cursos[index]);
  corpo.innerHTML += "<li>" + cursos[index] + "</li>";
}
