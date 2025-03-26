/*
var miCarro = new Object();
miCarro.marca = 'ford';
miCarro.modelo='Fiesta';
miCarro.año = 2013;
*/
/*
//Objeto literal
var miCarro= {
    marca: 'Ford',
    modelo: 'Fiesta',
    año: 2013
};
console.log(miCarro.marca);
*/
const gato={
    nombre:'Kikis',
    duerme: true,
    edad: 11,
    enemigos: ["laBebe","Bobito","Cherquio"]        
}
/*
console.log(gato.nombre);
console.log(gato.enemigos[1]);
*/
//console.log(gato['nombre']);
gato.color = "manchado";

console.log(gato.color);
console.log(gato);

gato.edad=12;
console.log(gato.edad);

delete gato.duerme;
console.log(gato);



