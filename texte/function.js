// function livro(nome, ano, autor) {
//   const nomeMaior = nome.toUpperCase();
//   const totalAnos = 2022 - ano;
//   var frase = nome + " escrito por " + autor;
//   const objeto = {
//     nome: nomeMaior,
//     totalAnos,
//     frase,
//   };
//   return objeto;
// }


// function livro(nome, ano, autor) {
//   var frase = nome + " escrito por " + autor;
//   const objeto = {
//     nome: nome.toUpperCase(),
//     totalAnos: 2022 - ano,
//     frase: nome + " escrito por " + autor,
//   };
//   return objeto;
// }

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2022 - ano,
    frase: nome + " escrito por " + autor,
  };
}



const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkin");

console.log(livroRetorno);