const express = require('express');
const morgan = require('morgan');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello Mr Answer');
});

module.exports = app;
