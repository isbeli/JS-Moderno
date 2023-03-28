//Concatenhando String

const produto = 'Monitor 20 Pulgadas';
const precio = '30 USD';


//01
console.log(produto.concat (precio));
console.log(produto.concat ('Em desconto'));

//02 
console.log(produto + precio);
console.log(produto + "Com um precio de:" + precio);

//03
console.log("O produto" + produto + "tem un precio de" + precio);

//04 ES6 Nova jeito de fazer
console.log(`O Produto ${produto} tem o precio de $ ${precio}`);
