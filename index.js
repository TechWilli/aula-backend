const express = require('express');
const bodyParser = require('body-parsen');
const app = express();
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: "leite",
        cobertura: "caramelo",
        adicional: "brigadeiro"
    });
});

app.get('/ola', (req, res) => {
     res.send('olaaaaaaaaa');
});

app.post('/teste', (req, res) => {
    res.send('recebi um post');
});

app.listen(3000); //em desenvolvimento, usar porta 3000, o processo roda nesa porta de acesso