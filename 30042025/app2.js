//impotar express
const express= require('express');

//Generar una instancia
const app =express();

//definicion de puerto
const port = 3009;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde otro puerto que es el 3009');
});


app.listen(port);