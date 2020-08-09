const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const createError = require('http-errors');
const jsonParser = express.json();
const config = require('../config/default.json');
const dbInit = require('./dbInit');

const bottleController = require('./routes/bottles');
const beerBrandsController = require('./routes/beerbrands');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let dbInstanse = null;

mongoose.connect(config.db.url, config.db.options, function (err, instanse) {
    if (err) return console.log('Mongo server running error', err);
    dbInit().then(instanse => dbInstanse = instanse);

    app.listen(config.app.port, function () {
        console.log('Server is runned');
    });
});

app.use('/api/bottles', bottleController);
app.use('/api/beerbrands', beerBrandsController);

const appErrorHandler = (err, req, res, next) => {
    res.status(500).json(createError(500));
};

app.use(appErrorHandler);
