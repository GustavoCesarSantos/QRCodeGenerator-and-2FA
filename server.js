const express = require('express');
const bodyParser = require('body-parser');

const qrcode = require('./src/qrcode/qrcode');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const code = await qrcode.generateQrCode();
  res.send(`<img src="${code}">`);
});

app.post('/', async(req,res) => {
  const userToken = req.body.token;
  const result = qrcode.verifyUserToken(userToken);
  res.status(200).json({ autenticado: result });
});

app.listen(3333, console.log('Servidor on in port 3333'));