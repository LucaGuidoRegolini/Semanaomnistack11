const express = require('express');
const cors = require('cors')
const routes = require('./routes') //./ Serve para indentificar que routes é um arquivo

const app = express();

app.unsubscribe(cors());
app.use(express.json()); //Converte o corpo da requisição em JSON
app.use(routes);

app.listen(3333);