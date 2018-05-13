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
app.get('/:natural', function(request,response){
  ///december%2015,%202015
  
  let date= request.params.natural.toString();
  let unix;
  let natural;
  if(date.match(/^\d+/)){
  unix= date;
  natural= new Date(date*1000).toDateString();
  }
  else if(!date.match(/^\d+/)){
    if(new Date(date).toString() !=="Invalid Date"){
     unix=(new Date(date).getTime()/1000).toString();
  natural= new Date(date).toDateString();
    }
    else{
    unix= null;
    natural= null;
    }
    
 
  }

 
  let data= {"unix" : unix, "natural": natural};
  
  //'/:month([A-Za-z]+%\\d{2},?%\\d{4})' regex that works

  
  
  
  

  response.end(JSON.stringify(data));

  
});
// app.get('/:date(\\d+)', function(request,response){
  
//   let date= request.params.date.toString();
//   let natural= new Date(date*1000);
  
//   let data= {"unix" : date, "natural": natural.toDateString()};
  
  
  
//   response.end(JSON.stringify(data));       
         
//          })
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
