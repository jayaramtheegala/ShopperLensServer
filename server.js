var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Configure bodyparser to read POST requests.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Set port to listen to.
var port = process.env.port || 8080;

app.use('/api', require('./app/routes'));

//app.use('/api', router)

app.listen(port);
console.log('Magic Happens on port :'+port);
