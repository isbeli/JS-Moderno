// os STRING representan um texto. pode ser nomeado assim ('' "")
let nome = prompt('Ensira seu nome?');
let sobrenome = prompt("Ensira seu sobrenome?");

document.querySelector('.contenido').innerHTML = `Bem-vindo (a) ${nome} ${sobrenome} a nosso curso jsmoderdo.`

// Mais comun de crear um STRING ""
// Para escape de aspas \
const produto = "Montitor 20\"";
console.log(produto);

// 2do caminho comun de crear um STRING ''

const produto2 = String ('Montitor 25"');
console.log(produto2);

// 3er caminho de crear um STRING. Isso cria um objeto do tipo string

const produto3 = new String ('Montitor 30 pulgadas');
console.log(produto3);

