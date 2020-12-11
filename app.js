const express = require('express');
const morgan = require('morgan');

const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(`${__dirname}/public`));

app.use(userRoutes);

module.exports = app;
