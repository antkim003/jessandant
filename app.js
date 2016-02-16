var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var swig = require('swig');
swig.setDefaults({cache: false});

var app = express();
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('assets'));

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
  res.render('index', { title: 'Happy Valentines Day' });
  
});

module.exports = app;