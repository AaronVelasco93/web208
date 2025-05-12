const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//menejar peticiones por medio de URl usando POST y por medio de REQ
app.use (bodyParser.urlencoded({extended:false}));

//Configuracion de platillas
app.set('view engine','ejs');

//conexion a la DB
const db=mysql.createConnection({
    host:'localhost', //server
    user: 'root', //user
    password: '123456', //pass
    database: 'node_crud', //Nombre de la DB
    port: 3306 //port
});

//validacion de la conexion a la DB
db.connect(err => {
    if(err){
        console.error('Sin conexion a la DB',err);
    }else{
        console.log('Base de datos conectada');
    }
});




