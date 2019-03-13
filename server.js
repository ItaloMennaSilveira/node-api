const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
// permite json 
app.use(express.json());
//existem varios parametros, ta liberado pra tudo q eh dominio
app.use(cors());

// Iniciando db
mongoose.connect(
  'mongodb://localhost:27017/node-api', 
  { useNewUrlParser: true}
);

// require('./src/models/Product');
requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);