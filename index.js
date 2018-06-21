const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: "leite",
        cobertura: "caramelo",
        adicional: "brigadeiro"
    });

app.listen(3000); //em desenvolvimento, usar porta 3000, o processo roda nesa porta de acesso