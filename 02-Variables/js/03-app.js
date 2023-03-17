const produto = 'Tablet';

//1 - Const, não pode ser reatribuído. 
produto =  "Monitor";
console.log(produto);

//2 - As variáveis com CONST devem ser inicializadas com um valor
//--const precio; 
console.log(precio);

document.querySelector('.contenido').innerHTML = `O valor do produto e : ${produto}`;