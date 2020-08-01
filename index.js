const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

var sk = require('./database/ads');

app.get('/', function(req, res){
  console.log(sk);
  res.send(sk);
  });


  app.listen(8080,function(){
    console.log('listening on port 8080');

  });
