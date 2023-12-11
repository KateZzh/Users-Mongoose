const express = require('express');
const user = require('./controller/user.controller');

const app = express();

app.use(express.json());
app.use('/user', user);
app.use((error, req, res, _next) => res.status(500).send(error.message));

module.exports = app;
