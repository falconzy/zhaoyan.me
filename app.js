
/**
 * Module dependencies.
 */

var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache ={};
var chatServer = require('./chatRoom/lib/chat_server.js');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout') // defaults to 'layout'   
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(expressLayouts)
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/index', routes.index);

app.get('/MyPhoto', function(req,res){
	 res.render('ComingSoon.ejs',{
	 	title: 'My Photo Coming Soon !',
	 	layout:'layout'})
});

app.get('/MyPaper', function(req,res){
	 res.render('myPaper.ejs',{
	 	title: 'My Paper',
	 	layout:'layout'})
});

app.get('/MyBlog', function(req,res){
res.redirect('http://geekblog.zhaoyan.me/');
});

app.get('/MyLab', function(req,res){
	 res.render('MyLab.ejs',{
	 	title: 'My Lab',
	 	layout:'layout'})
});

app.get('/MyLab/Angular', function(req,res){
	res.redirect('/HTML/Angular.html');
});

app.get('/MyLab/impressJS', function(req,res){
	res.redirect('/HTML/impressJS.html');
});

app.get('/calStock', function(req,res){
	res.redirect('/HTML/calStock.html');
});

app.get('/chatRoom', function(req,res){
	res.redirect('../HTML/chatIndex.html');
});


app.get('/about', function(req,res){
	 res.render('about.ejs',{
	 	title: 'About Me',
	 	layout:'layout'})
});

app.use(function(req, res, next) {
  res.status(404);
  req.accepts('html');
  if (req.accepts('ejs')) {
   		res.render('comingSoon.ejs',{
	 	title: 'PAGE NOT FOUND',
	 	layout:'layout'})
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

server = http.createServer(app);
chatServer.listen(server); 
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
