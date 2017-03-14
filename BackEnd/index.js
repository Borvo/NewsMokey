var express = require('express');
var db= require('./databaseInteraction.js');
 
var app = express();
 
 app.listen(8085, function () {
  console.log('Server listen on 8085');
});
 
/*app.post('/', function (req, res) {
	res.end();
});
 
app.get('/', function (req, res) {
	res.send(db.gestionePersone.tutti());
});*/
 