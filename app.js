const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hola Sabado 6 de Noviembre 2021'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
