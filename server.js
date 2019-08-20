const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public') );
// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

  res.render('home', {
    name: 'jesus antoniez'
  });
});
app.get('/about', function(req,res){
  res.render('about');
});

app.get('/data', function (req, res) {
  res.send("DATA");
});

app.listen(port, () => {
  console.log(`Listen ${port} port`);
});