const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('../../routes/token/token');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

routes(app);

module.exports = app;