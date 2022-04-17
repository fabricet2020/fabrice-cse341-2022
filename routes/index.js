const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hello World From Fabrice 2022 - CSE341!');
});

module.exports = routes;
