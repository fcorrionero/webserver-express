const http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type':'application/json'});

  let output = {
    name: 'Test',
    age: '30',
    url: req.url
  }

  // res.write('Hello World');
  res.write(JSON.stringify(output));
  res.end();

})
  .listen(7070)
;

console.log('escuchado 7070')