// dépendance api express
var express = require('express');
var bodyParser = require("body-parser"); 
// serveur html
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
//
// Parse incoming requests data
server.use(bodyParser.json());

server.listen(80);
 
server.get('/page.html', function(request, response) {
  response.sendFile( __dirname  + '/page.html');
});

server.get('/post.html', function(request, response) {
   
    response.sendFile( __dirname  + '/post.html');
  });
  
  
 // test post no inerface
server.post('/calcul/', (request, response) => {
    
    var p1 = request.body.p1; 
    var p2 = request.body.p2; 
	var somme = parseInt(p1) + parseInt(p2);
     
   
   
   return response.status(201).send({
     success: 'true',
     message: 'add successfully',
     somme
   })
  });
 
 
 //de puis formulaire 
server.post('/post.html', function(request, response) {
  var p1 = request.body.p1; 
  var p2 = request.body.p2; 
  var somme = parseInt(p1) + parseInt(p2);
  console.log("p1=" + p1);
  console.log("p2=" + p2);
  console.log("Somme=" + somme);
  //response.redirect('/post.html',{somme:somme})
  //response.send({somme:somme});
  response.send('somme:'+ somme);
});