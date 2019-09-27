const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3333, console.log('Servidor on in port 3333'));