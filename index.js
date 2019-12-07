const express = require('express');
const app = express();
const porta = 4000;
const bodyParser = require('body-parser');
const connection = require('./database/database');
const rotaIndex = require('./route/rotaIndex');
const rotaUsuario = require('./route/rotaUsuario');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/index', rotaIndex);
app.use('/', rotaUsuario);

connection.authenticate().then( () => {
    console.log('Banco autenticado.');
}).catch((e) => {
    console.log(e);
});





app.listen(porta, (erro) => {
    if(erro){
        console.log('Falha ao iniciar servidor.');
    }else{
        console.log('Servidor iniciado na porta: ' + porta);
    }
});