const frutas = [];

const fruta = prompt('¿Que fruta desea comprar?');

frutas.push(fruta);

while(confirm('¿Desea agregar otra fruta a el carrito?') ){
    const fruta = prompt('¿Que fruta desea agregar?');
    frutas.push(fruta);
}
/*
console.log("Usted compro: ");
for(let fruta of frutas ){
    console.log(fruta);
}
*/
for(let fruta in frutas ){
    console.log(fruta);
}

