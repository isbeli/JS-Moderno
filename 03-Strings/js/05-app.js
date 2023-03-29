const produto = 'Monitor 20 Pulgadas';

console.log(produto);

//.replace Para reemplaçar.
console.log(produto.replace('Pulgadas','"'));
console.log(produto.replace('Monitor','Monitor Curvo'));

//.slice Para cortar
console.log(produto.slice(0 , 10));
console.log(produto.slice(8));
console.log(produto.slice(3 , 1));

//alternativa a slice
console.log(produto.substring(0 , 10));
console.log(produto.substring(3 , 1));


const usuario = 'Isbeli'
console.log(usuario.substring(0 , 1));
console.log(usuario.charAt(0));




