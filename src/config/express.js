require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/estatico', express.static('src/app/public'))

const rotas = require('./rotas');
rotas(app);

module.exports = app;