const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello Mr Answer');
});

module.exports = app;
