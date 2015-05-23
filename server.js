var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./app/routes');


/* Create database connection. */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');


//Configure bodyparser to read POST requests.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Set port to listen to.
var port = process.env.port || 8080;

app.use('/api', router);


app.listen(port);
console.log('Listening on port :'+port);
