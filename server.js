// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  // 
});
app.get('/:natural(/\\w+\\s+\\d+)', function(request,response){
  
  let date= request.params.natural.toString();

  response.end(date);
  
})
app.get('/:date(\\d+)', function(request,response){
  
  let date= request.params.date.toString();
  let natural= new Date(date*1000)
  
  let data= {"unix" : date, "natural": natural.toDateString()};
  
  
  
  response.end(JSON.stringify(data));       
         
         })
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
